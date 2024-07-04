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
exports.PostgresStreetRepository = void 0;
// src/infrastructure/persistence/postgres/PostgresStreetRepository.ts
const tsyringe_1 = require("tsyringe");
const pg_1 = require("pg");
const Street_1 = require("../../../domain/entities/Street");
const StreetName_1 = require("../../../domain/value-objects/StreetName");
let PostgresStreetRepository = class PostgresStreetRepository {
    constructor(pool) {
        this.pool = pool;
    }
    async save(street) {
        const query = `
            INSERT INTO streets (id, name)
            VALUES ($1, $2)
        `;
        const values = [street.id, street.name.toString()];
        await this.pool.query(query, values);
    }
    async findByName(name) {
        const query = `SELECT * FROM streets WHERE name = $1`;
        const result = await this.pool.query(query, [name]);
        if (result.rows.length === 0) {
            return null;
        }
        const row = result.rows[0];
        return new Street_1.Street(row.id, new StreetName_1.StreetName(row.name));
    }
    async findById(id) {
        const query = `SELECT * FROM streets WHERE id = $1`;
        const result = await this.pool.query(query, [id]);
        if (result.rows.length === 0) {
            return null;
        }
        const row = result.rows[0];
        return new Street_1.Street(row.id, new StreetName_1.StreetName(row.name));
    }
    async deleteById(id) {
        const query = `DELETE FROM streets WHERE id = $1`;
        await this.pool.query(query, [id]);
    }
    async update(street) {
        const query = `
            UPDATE streets
            SET name = $1
            WHERE id = $2
        `;
        const values = [street.name.toString(), street.id];
        await this.pool.query(query, values);
    }
    async findAll() {
        const query = `SELECT * FROM streets`;
        const result = await this.pool.query(query);
        return result.rows.map(row => new Street_1.Street(row.id, new StreetName_1.StreetName(row.name)));
    }
};
exports.PostgresStreetRepository = PostgresStreetRepository;
exports.PostgresStreetRepository = PostgresStreetRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('PostgresPool')),
    __metadata("design:paramtypes", [pg_1.Pool])
], PostgresStreetRepository);
