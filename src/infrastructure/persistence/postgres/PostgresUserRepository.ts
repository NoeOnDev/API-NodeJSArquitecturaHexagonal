// src/infrastructure/persistence/postgres/PostgresUserRepository.ts
import { inject, injectable } from 'tsyringe';
import { Pool } from 'pg';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { Email } from '../../../domain/value-objects/Email';
import { Username } from '../../../domain/value-objects/Username';
import { StreetName } from '../../../domain/value-objects/StreetName';
import { Password } from '../../../domain/value-objects/Password';

@injectable()
export class PostgresUserRepository implements UserRepository {
    constructor(@inject('PostgresPool') private pool: Pool) {}

    async save(user: User): Promise<void> {
        const query = `
            INSERT INTO users (id, username, street, email, password, image_url)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const values = [user.id, user.username.toString(), user.street.toString(), user.email.toString(), user.password.toString(), user.imageUrl];
        await this.pool.query(query, values);
    }

    async findByEmail(email: string): Promise<User | null> {
        const query = `SELECT * FROM users WHERE email = $1`;
        const result = await this.pool.query(query, [email]);

        if (result.rows.length === 0) {
            return null;
        }

        const row = result.rows[0];
        return new User(row.id, new Username(row.username), new StreetName(row.street), new Email(row.email), new Password(row.password), row.image_url);
    }

    async findById(id: string): Promise<User | null> {
        const query = `SELECT * FROM users WHERE id = $1`;
        const result = await this.pool.query(query, [id]);

        if (result.rows.length === 0) {
            return null;
        }

        const row = result.rows[0];
        return new User(row.id, new Username(row.username), new StreetName(row.street), new Email(row.email), new Password(row.password), row.image_url);
    }

    async deleteById(id: string): Promise<void> {
        const query = `DELETE FROM users WHERE id = $1`;
        await this.pool.query(query, [id]);
    }

    async update(user: User): Promise<void> {
        const query = `
            UPDATE users
            SET username = $1, street = $2, email = $3, password = $4, image_url = $5
            WHERE id = $6
        `;
        const values = [user.username.toString(), user.street.toString(), user.email.toString(), user.password.toString(), user.imageUrl, user.id];
        await this.pool.query(query, values);
    }

    async findAll(): Promise<User[]> {
        const query = `SELECT * FROM users`;
        const result = await this.pool.query(query);

        return result.rows.map(row => new User(row.id, new Username(row.username), new StreetName(row.street), new Email(row.email), new Password(row.password), row.image_url));
    }
}
