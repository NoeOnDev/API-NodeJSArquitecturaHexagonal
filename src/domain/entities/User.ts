// src/domain/entities/User.ts
import { Username } from "../value-objects/Username";
import { StreetName } from "../value-objects/StreetName";
import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

export class User {
    constructor(
        public id: string,
        public username: Username,
        public street: StreetName,
        public email: Email,
        public password: Password,
        public imageUrl?: string
    ) { }

    toJSON() {
        return {
            id: this.id,
            username: this.username.toString(),
            street: this.street.toString(),
            email: this.email.toString(),
            password: this.password.toString(),
            imageUrl: this.imageUrl
        };
    }
}
