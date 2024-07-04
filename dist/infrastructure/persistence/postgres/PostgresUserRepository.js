"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUserRepository = void 0;
// src/infrastructure/persistence/postgres/PostgresUserRepository.ts
const User_1 = require("../../../domain/entities/User");
const Email_1 = require("../../../domain/value-objects/Email");
const Password_1 = require("../../../domain/value-objects/Password");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
const Username_1 = require("../../../domain/value-objects/Username");
class PostgresUserRepository {
    constructor(pool) {
        this.pool = pool;
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO users (id, username, street, email, password, image_url) VALUES ($1, $2, $3, $4, $5, $6)';
            const values = [user.id, user.username.toString(), user.street.toString(), user.email.toString(), user.password.toString(), user.imageUrl];
            yield this.pool.query(query, values);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM users WHERE email = $1';
            const result = yield this.pool.query(query, [email]);
            if (result.rows.length === 0)
                return null;
            const row = result.rows[0];
            return new User_1.User(row.id, new Username_1.Username(row.username), new StreetName_1.StreetName(row.street), new Email_1.Email(row.email), new Password_1.Password(row.password), row.image_url);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM users WHERE id = $1';
            const result = yield this.pool.query(query, [id]);
            if (result.rows.length === 0)
                return null;
            const row = result.rows[0];
            return new User_1.User(row.id, new Username_1.Username(row.username), new StreetName_1.StreetName(row.street), new Email_1.Email(row.email), new Password_1.Password(row.password), row.image_url);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'DELETE FROM users WHERE id = $1';
            yield this.pool.query(query, [id]);
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'UPDATE users SET username = $2, street = $3, email = $4, password = $5, image_url = $6 WHERE id = $1';
            const values = [user.id, user.username.toString(), user.street.toString(), user.email.toString(), user.password.toString(), user.imageUrl];
            yield this.pool.query(query, values);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM users';
            const result = yield this.pool.query(query);
            return result.rows.map(row => new User_1.User(row.id, new Username_1.Username(row.username), new StreetName_1.StreetName(row.street), new Email_1.Email(row.email), new Password_1.Password(row.password), row.image_url));
        });
    }
}
exports.PostgresUserRepository = PostgresUserRepository;
