// src/infrastructure/controllers/FileController.ts
import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import path from 'path';
import fs from 'fs';

@injectable()
export class FileController {
    async uploadImage(req: Request, res: Response): Promise<void> {
        if (req.file) {
            res.status(200).json({ imageUrl: `/images/${req.file.filename}` });
        } else {
            res.status(400).json({ message: 'No file uploaded' });
        }
    }

    async getImage(req: Request, res: Response): Promise<void> {
        const { filename } = req.params;
        const filePath = path.resolve(`images/${filename}`);
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.status(404).json({ message: 'File not found' });
        }
    }
}
