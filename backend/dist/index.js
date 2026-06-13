"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const enquiry_1 = __importDefault(require("./routes/enquiry"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/kidrove-workshop';
// Middleware
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Allow requests from Vite dev server
    credentials: true,
}));
app.use(express_1.default.json());
// Logger middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});
// Routes
app.use('/api', enquiry_1.default);
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        database: mongoose_1.default.connection.readyState === 1 ? 'CONNECTED' : 'DISCONNECTED',
    });
});
// Start server and connect to Database
const startServer = async () => {
    try {
        mongoose_1.default.set('strictQuery', true);
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('Successfully connected to MongoDB.');
    }
    catch (error) {
        console.error('MongoDB connection failed. Continuing in offline/fallback mode:', error);
    }
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
startServer();
