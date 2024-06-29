// src/domain/entities/User.ts
export class User {
    constructor(
        public id: string,
        public username: string,
        public street: string,
        public email: string,
        public password: string
    ) { }
}