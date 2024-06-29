// src/index.ts
import express from 'express';
import { InMemoryUserRepository } from './infrastructure/adapters/persistence/InMemoryUserRepository';
import { InMemoryStreetRepository } from './infrastructure/adapters/persistence/InMemoryStreetRepository';
import { CreateUser } from './application/use-cases/user/CreateUser';
import { GetUserById } from './application/use-cases/user/GetUserById';
import { GetAllUsers } from './application/use-cases/user/GetAllUsers';
import { UserController } from './infrastructure/adapters/controllers/UserController';
import { CreateStreet } from './application/use-cases/street/CreateStreet';
import { GetStreetById } from './application/use-cases/street/GetStreetById';
import { GetAllStreets } from './application/use-cases/street/GetAllStreets';
import { StreetController } from './infrastructure/adapters/controllers/StreetController';

const app = express();
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const streetRepository = new InMemoryStreetRepository();

const userController = new UserController(
    new CreateUser(userRepository),
    new GetUserById(userRepository),
    new GetAllUsers(userRepository)
);

const streetController = new StreetController(
    new CreateStreet(streetRepository),
    new GetStreetById(streetRepository),
    new GetAllStreets(streetRepository)
);

app.post('/users', (req, res) => userController.create(req, res));
app.get('/users/:id', (req, res) => userController.getById(req, res));
app.get('/users', (req, res) => userController.getAll(req, res));

app.post('/streets', (req, res) => streetController.create(req, res));
app.get('/streets/:id', (req, res) => streetController.getById(req, res));
app.get('/streets', (req, res) => streetController.getAll(req, res));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
