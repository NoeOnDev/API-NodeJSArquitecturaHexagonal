"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, street, email, password, imageUrl) {
        this.id = id;
        this.username = username;
        this.street = street;
        this.email = email;
        this.password = password;
        this.imageUrl = imageUrl;
    }
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
exports.User = User;
