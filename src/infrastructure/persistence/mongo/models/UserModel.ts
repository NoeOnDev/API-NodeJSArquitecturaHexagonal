// src/infrastructure/persistence/mongo/models/UserModel.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IUserDocument extends Document {
    username: string;
    street: string;
    email: string;
    password: string;
    imageUrl?: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    street: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageUrl: { type: String },
});

export const UserModel = mongoose.model<IUserDocument>('User', UserSchema);
