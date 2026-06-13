import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import fs from 'fs';
import Enquiry from '../models/Enquiry';
import { getBackupFilePath } from '../utils/backup';

const router = Router();

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
      if (mongoose.connection.readyState === 1) {
        const newEnquiry = new Enquiry(enquiryData);
        await newEnquiry.save();
        savedToMongo = true;
      }
    } catch (dbError) {
      console.error('MongoDB Save Error:', dbError);
    }

    try {
      const backupFilePath = getBackupFilePath();
      let existingData: typeof enquiryData[] = [];

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
