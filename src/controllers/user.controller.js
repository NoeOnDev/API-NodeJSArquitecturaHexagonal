import { sequelize } from '../database/config.js';
import { User } from '../models/user.js';
import { Op } from 'sequelize';

export async function loginUser(req, res) {
    try {
        const { email, name, password } = req.body;
        let conditions = [];
        if (email) conditions.push({ email });
        if (name) conditions.push({ name });

        const user = await User.findOne({ where: { [Op.or]: conditions } });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Contraseña inválida' });
        }

        res.status(200).json({ message: 'Usuario autenticado', name: user.name });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function registerUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function searchUsers(req, res) {
    try {
        const { name } = req.query;

        const users = await User.findAll({
            where: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('name')),
                {
                    [Op.like]: '%' + name.toLowerCase() + '%'
                }
            )
        });

        res.status(200).json({ message: 'Usuarios encontrados', names: users.map(user => user.name)});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}