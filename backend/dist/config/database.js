"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = connectDatabase;
exports.getDatabaseStatus = getDatabaseStatus;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/kidrove-workshop';
const cache = global.mongooseCache ?? { conn: null, promise: null };
global.mongooseCache = cache;
async function connectDatabase() {
    if (cache.conn) {
        return cache.conn;
    }
    if (!cache.promise) {
        mongoose_1.default.set('strictQuery', true);
        cache.promise = mongoose_1.default.connect(MONGODB_URI);
    }
    try {
        cache.conn = await cache.promise;
        console.log('Successfully connected to MongoDB.');
        return cache.conn;
    }
    catch (error) {
        cache.promise = null;
        console.error('MongoDB connection failed. Continuing in offline/fallback mode:', error);
        return null;
    }
}
function getDatabaseStatus() {
    return mongoose_1.default.connection.readyState === 1 ? 'CONNECTED' : 'DISCONNECTED';
}
