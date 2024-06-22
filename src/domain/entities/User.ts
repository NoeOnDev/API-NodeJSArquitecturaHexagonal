import { UserId } from "../value-objects/UserId";

export class User {
    constructor(
        private readonly id: UserId,
        private readonly name: string,
        private readonly email: string,
        private readonly password: string,
        private readonly street: string
    ) { }
}