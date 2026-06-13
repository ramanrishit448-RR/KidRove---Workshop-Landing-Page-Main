"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const enquiry_1 = __importDefault(require("./routes/enquiry"));
const database_1 = require("./config/database");
dotenv_1.default.config();
const app = (0, express_1.default)();
const allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
];
app.use((0, cors_1.default)({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }
        callback(null, true);
    },
    credentials: true,
}));
app.use(express_1.default.json());
app.use(async (_req, _res, next) => {
    await (0, database_1.connectDatabase)();
    next();
});
app.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});
app.use('/api', enquiry_1.default);
app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'UP',
        database: (0, database_1.getDatabaseStatus)(),
    });
});
exports.default = app;
