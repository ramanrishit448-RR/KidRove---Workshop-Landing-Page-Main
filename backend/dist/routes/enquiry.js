"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const fs_1 = __importDefault(require("fs"));
const Enquiry_1 = __importDefault(require("../models/Enquiry"));
const backup_1 = require("../utils/backup");
const router = (0, express_1.Router)();
const enquiryValidationRules = [
    (0, express_validator_1.body)('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
    (0, express_validator_1.body)('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(),
    (0, express_validator_1.body)('phone')
        .trim()
        .notEmpty().withMessage('Phone number is required')
        .matches(/^[0-9+\-\s()]{10,15}$/).withMessage('Please enter a valid 10-15 digit phone number'),
];
router.post('/enquiry', enquiryValidationRules, async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
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
        if (mongoose_1.default.connection.readyState === 1) {
            const newEnquiry = new Enquiry_1.default(enquiryData);
            await newEnquiry.save();
            savedToMongo = true;
        }
    }
    catch (dbError) {
        console.error('MongoDB Save Error:', dbError);
    }
    try {
        const backupFilePath = (0, backup_1.getBackupFilePath)();
        let existingData = [];
        if (fs_1.default.existsSync(backupFilePath)) {
            const fileContent = fs_1.default.readFileSync(backupFilePath, 'utf8');
            existingData = JSON.parse(fileContent || '[]');
        }
        existingData.push(enquiryData);
        fs_1.default.writeFileSync(backupFilePath, JSON.stringify(existingData, null, 2), 'utf8');
        savedToBackup = true;
    }
    catch (fsError) {
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
    }
    else {
        res.status(500).json({
            success: false,
            message: 'Failed to process enquiry. Please try again later.',
        });
    }
});
exports.default = router;
