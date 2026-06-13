"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackupDir = getBackupDir;
exports.getBackupFilePath = getBackupFilePath;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/** Writable backup directory — /tmp on Vercel, local data/ otherwise */
function getBackupDir() {
    const dir = process.env.VERCEL
        ? path_1.default.join('/tmp', 'kidrove-workshop')
        : path_1.default.join(__dirname, '../../data');
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir, { recursive: true });
    }
    return dir;
}
function getBackupFilePath() {
    return path_1.default.join(getBackupDir(), 'registrations.json');
}
