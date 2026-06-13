import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import enquiryRouter from './routes/enquiry';
import { connectDatabase, getDatabaseStatus } from './config/database';

dotenv.config();

const app: Express = express();

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(async (_req, _res, next) => {
  await connectDatabase();
  next();
});

app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.use('/api', enquiryRouter);

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'UP',
    database: getDatabaseStatus(),
  });
});

export default app;
