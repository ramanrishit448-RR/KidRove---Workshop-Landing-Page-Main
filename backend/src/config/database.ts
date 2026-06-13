import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/kidslab-workshop';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cache: MongooseCache = global.mongooseCache ?? { conn: null, promise: null };
global.mongooseCache = cache;

export async function connectDatabase(): Promise<typeof mongoose | null> {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    mongoose.set('strictQuery', true);
    cache.promise = mongoose.connect(MONGODB_URI);
  }

  try {
    cache.conn = await cache.promise;
    console.log('Successfully connected to MongoDB.');
    return cache.conn;
  } catch (error) {
    cache.promise = null;
    console.error('MongoDB connection failed. Continuing in offline/fallback mode:', error);
    return null;
  }
}

export function getDatabaseStatus(): 'CONNECTED' | 'DISCONNECTED' {
  return mongoose.connection.readyState === 1 ? 'CONNECTED' : 'DISCONNECTED';
}
