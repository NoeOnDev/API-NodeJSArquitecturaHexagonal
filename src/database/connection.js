import {  sequelize } from './config.js';
import { User } from '../models/user.js';

export async function database() {
    try {
        await connect();
        await sync();
    } catch (error) {
        console.error(error);
    }
}

export async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export async function sync() {
    try {
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to synchronize the models:', error);
    }
}