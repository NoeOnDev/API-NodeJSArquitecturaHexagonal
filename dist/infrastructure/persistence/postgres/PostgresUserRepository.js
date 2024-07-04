"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUserRepository = void 0;
// src/infrastructure/persistence/postgres/PostgresUserRepository.ts
const tsyringe_1 = require("tsyringe");
const pg_1 = require("pg");
const User_1 = require("../../../domain/entities/User");
const Email_1 = require("../../../domain/value-objects/Email");
const Username_1 = require("../../../domain/value-objects/Username");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
const Password_1 = require("../../../domain/value-objects/Password");
let PostgresUserRepository = class PostgresUserRepository {
    constructor(pool) {
        this.pool = pool;
    }
    async save(user) {
        const query = `
            INSERT INTO users (id, username, street, email, password, image_url)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const values = [user.id, user.username.toString(), user.street.toString(), user.email.toString(), user.password.toString(), user.imageUrl];
        await this.pool.query(query, values);
    }
    async findByEmail(email) {
        const query = `SELECT * FROM users WHERE email = $1`;
        const result = await this.pool.query(query, [email]);
        if (result.rows.length === 0) {
            return null;
        }
        const row = result.rows[0];
        return new User_1.User(row.id, new Username_1.Username(row.username), new StreetName_1.StreetName(row.street), new Email_1.Email(row.email), new Password_1.Password(row.password), row.image_url);
    }
    async findById(id) {
        const query = `SELECT * FROM users WHERE id = $1`;
        const result = await this.pool.query(query, [id]);
        if (result.rows.length === 0) {
            return null;
        }
        const row = result.rows[0];
        return new User_1.User(row.id, new Username_1.Username(row.username), new StreetName_1.StreetName(row.street), new Email_1.Email(row.email), new Password_1.Password(row.password), row.image_url);
    }
    async deleteById(id) {
        const query = `DELETE FROM users WHERE id = $1`;
        await this.pool.query(query, [id]);
    }
    async update(user) {
        const query = `
            UPDATE users
            SET username = $1, street = $2, email = $3, password = $4, image_url = $5
            WHERE id = $6
        `;
        const values = [user.username.toString(), user.street.toString(), user.email.toString(), user.password.toString(), user.imageUrl, user.id];
        await this.pool.query(query, values);
    }
    async findAll() {
        const query = `SELECT * FROM users`;
        const result = await this.pool.query(query);
        return result.rows.map(row => new User_1.User(row.id, new Username_1.Username(row.username), new StreetName_1.StreetName(row.street), new Email_1.Email(row.email), new Password_1.Password(row.password), row.image_url));
    }
};
exports.PostgresUserRepository = PostgresUserRepository;
exports.PostgresUserRepository = PostgresUserRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('PostgresPool')),
    __metadata("design:paramtypes", [pg_1.Pool])
], PostgresUserRepository);
