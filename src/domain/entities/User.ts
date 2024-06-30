// src/domain/entities/User.ts
import { v4 as uuidv4 } from 'uuid';

export class User {
    constructor(
        public id: string = uuidv4(),
        public username: string,
        public street: string,
        public email: string,
        public password: string
    ) { }
}