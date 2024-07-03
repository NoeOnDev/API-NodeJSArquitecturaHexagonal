// src/infrastructure/controllers/FileController.ts
import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, 'images/');
    },
    filename: (_req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

export const upload = multer({ storage });

@injectable()
export class FileController {
    async uploadImage(req: Request, res: Response): Promise<void> {
        upload.single('image')(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                res.status(400).json({ message: 'Error uploading file' });
            } else if (err) {
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                if (req.file) {
                    res.status(200).json({ imageUrl: `/images/${req.file.filename}` });
                } else {
                    res.status(400).json({ message: 'No file uploaded' });
                }
            }
        });
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
