// src/index.ts
import 'reflect-metadata';
import './infrastructure/containers/RepositoryContainer';
import './infrastructure/containers/UseCaseContainer';
import express from 'express';
import cors from 'cors';
import userRoutes from './infrastructure/routes/userRoutes';
import streetRoutes from './infrastructure/routes/streetRoutes';
import fileRoutes from './infrastructure/routes/fileRoutes';
import { errorMiddleware } from './infrastructure/middleware/errorMiddleware';
import { env } from './infrastructure/config/env';

const PORT = env.port;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/images', express.static('images'));

app.use(userRoutes);
app.use(streetRoutes);
app.use(fileRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
