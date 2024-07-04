// src/index.ts
import 'reflect-metadata';
import express from 'express';
import './infrastructure/containers/RepositoryContainer';
import './infrastructure/containers/UseCaseContainer';
import userRoutes from './infrastructure/routes/userRoutes';
import streetRoutes from './infrastructure/routes/streetRoutes';
import fileRoutes from './infrastructure/routes/fileRoutes';
import { errorMiddleware } from './infrastructure/middleware/errorMiddleware';

const app = express();
app.use(express.json());
app.use('/images', express.static('images'));

app.use(userRoutes);
app.use(streetRoutes);
app.use(fileRoutes);

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
