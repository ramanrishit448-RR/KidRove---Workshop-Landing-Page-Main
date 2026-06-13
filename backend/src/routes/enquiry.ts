import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Enquiry from '../models/Enquiry';

const router = Router();

// Ensure backup storage directory exists
const backupDir = path.join(__dirname, '../../data');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}
const backupFilePath = path.join(backupDir, 'registrations.json');

// Validation rules
const enquiryValidationRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[0-9+\-\s()]{10,15}$/).withMessage('Please enter a valid 10-15 digit phone number'),
];

router.post(
  '/enquiry',
  enquiryValidationRules,
  async (req: Request, res: Response): Promise<void> => {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        errors: errors.array().map((err) => ({
          field: err.type === 'field' ? err.path : '',
          message: err.msg,
        })),
      });
      return;
    }

    const { name, email, phone, workshop } = req.body;

    // Create enquiry payload
    const enquiryData = {
      name,
      email,
      phone,
      workshop: workshop || 'AI & Robotics Summer Workshop',
      createdAt: new Date(),
    };

    let savedToMongo = false;
    let savedToBackup = false;

    try {
      // 1. Try saving to MongoDB if connected
      if (mongoose.connection.readyState === 1) {
        const newEnquiry = new Enquiry(enquiryData);
        await newEnquiry.save();
        savedToMongo = true;
      }
    } catch (dbError) {
      console.error('MongoDB Save Error:', dbError);
    }

    // 2. Always write to local backup file as a transaction log or fallback
    try {
      let existingData = [];
      if (fs.existsSync(backupFilePath)) {
        const fileContent = fs.readFileSync(backupFilePath, 'utf8');
        existingData = JSON.parse(fileContent || '[]');
      }
      existingData.push(enquiryData);
      fs.writeFileSync(backupFilePath, JSON.stringify(existingData, null, 2), 'utf8');
      savedToBackup = true;
    } catch (fsError) {
      console.error('Local Backup Write Error:', fsError);
    }

    // Check if we succeeded in either of the stores
    if (savedToMongo || savedToBackup) {
      res.status(201).json({
        success: true,
        message: 'Enquiry submitted successfully!',
        data: enquiryData,
        storage: {
          mongodb: savedToMongo,
          fallbackFile: savedToBackup,
        },
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to process enquiry. Please try again later.',
      });
    }
  }
);

export default router;
