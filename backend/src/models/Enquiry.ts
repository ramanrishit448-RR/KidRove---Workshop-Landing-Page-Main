import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  workshop: string;
  createdAt: Date;
}

const EnquirySchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  workshop: {
    type: String,
    default: 'AI & Robotics Summer Workshop',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
