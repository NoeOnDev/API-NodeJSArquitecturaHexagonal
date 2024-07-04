// src/infrastructure/persistence/postgres/PostgresStreetRepository.ts
import { injectable, inject } from 'tsyringe';
import { Pool } from 'pg';
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';
import { StreetName } from '../../../domain/value-objects/StreetName';

@injectable()
export class PostgresStreetRepository implements StreetRepository {
    constructor(@inject('PostgresPool') private pool: Pool) {}

    async save(street: Street): Promise<void> {
        const query = `
            INSERT INTO streets (id, name)
            VALUES ($1, $2)
        `;
        const values = [street.id, street.name.toString()];
        await this.pool.query(query, values);
    }

    async findByName(name: string): Promise<Street | null> {
        const query = `SELECT * FROM streets WHERE name = $1`;
        const result = await this.pool.query(query, [name]);

        if (result.rows.length === 0) {
            return null;
        }

        const row = result.rows[0];
        return new Street(row.id, new StreetName(row.name));
    }

    async findById(id: string): Promise<Street | null> {
        const query = `SELECT * FROM streets WHERE id = $1`;
        const result = await this.pool.query(query, [id]);

        if (result.rows.length === 0) {
            return null;
        }

        const row = result.rows[0];
        return new Street(row.id, new StreetName(row.name));
    }

    async deleteById(id: string): Promise<void> {
        const query = `DELETE FROM streets WHERE id = $1`;
        await this.pool.query(query, [id]);
    }

    async update(street: Street): Promise<void> {
        const query = `
            UPDATE streets
            SET name = $1
            WHERE id = $2
        `;
        const values = [street.name.toString(), street.id];
        await this.pool.query(query, values);
    }

    async findAll(): Promise<Street[]> {
        const query = `SELECT * FROM streets`;
        const result = await this.pool.query(query);

        return result.rows.map(row => new Street(row.id, new StreetName(row.name)));
    }
}
