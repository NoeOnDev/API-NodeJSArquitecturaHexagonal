// src/index.ts
import 'reflect-metadata';
import express from 'express';
import { container } from 'tsyringe';
import './infrastructure/containers/RepositoryContainer';
import './infrastructure/containers/UseCaseContainer';
import { UserController } from './infrastructure/adapters/controllers/UserController';
import { StreetController } from './infrastructure/adapters/controllers/StreetController';

const app = express();
app.use(express.json());

const userController = container.resolve(UserController);
const streetController = container.resolve(StreetController);

app.post('/users', (req, res) => userController.create(req, res));
app.get('/users/:id', (req, res) => userController.getById(req, res));
app.get('/users', (req, res) => userController.getAll(req, res));

app.post('/streets', (req, res) => streetController.create(req, res));
app.get('/streets/:id', (req, res) => streetController.getById(req, res));
app.get('/streets', (req, res) => streetController.getAll(req, res));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
