// src/infrastructure/persistence/mongo/models/StreetModel.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IStreetDocument extends Document {
    name: string;
}

const StreetSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
});

export const StreetModel = mongoose.model<IStreetDocument>('Street', StreetSchema);
