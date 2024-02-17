import express from 'express';
import userRoutes from '../routes/user.routes.js';
import { database } from '../database/connection.js';

export async function App() {
    try {
        const app = express();
        const PORT = process.env.PORT;
        app.use(express.json());
        app.use(userRoutes);

        await database();

        app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });
    } catch (error) {
        console.error(error);
    }
}