// src/infrastructure/config/mongoConfig.ts
import mongoose from 'mongoose';
import { env } from './env';

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(env.mongo.uri as string);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};
