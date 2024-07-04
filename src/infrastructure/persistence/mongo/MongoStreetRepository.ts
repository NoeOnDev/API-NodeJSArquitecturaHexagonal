// src/infrastructure/persistence/mongo/MongoStreetRepository.ts
import { injectable } from 'tsyringe';
import { Street } from '../../../domain/entities/Street';
import { StreetRepository } from '../../../domain/repositories/StreetRepository';
import { StreetModel } from './models/StreetModel';
import { StreetName } from '../../../domain/value-objects/StreetName';

@injectable()
export class MongoStreetRepository implements StreetRepository {
    async save(street: Street): Promise<void> {
        const streetModel = new StreetModel({
            id: street.id,
            name: street.name.toString(),
        });
        await streetModel.save();
    }

    async findByName(name: string): Promise<Street | null> {
        const streetDoc = await StreetModel.findOne({ name });
        if (!streetDoc) {
            return null;
        }
        return new Street(streetDoc.id, new StreetName(streetDoc.name));
    }

    async findById(id: string): Promise<Street | null> {
        const streetDoc = await StreetModel.findById(id);
        if (!streetDoc) {
            return null;
        }
        return new Street(streetDoc.id, new StreetName(streetDoc.name));
    }

    async findAll(): Promise<Street[]> {
        const streetDocs = await StreetModel.find();
        return streetDocs.map(streetDoc => new Street(streetDoc.id, new StreetName(streetDoc.name)));
    }

    async deleteById(id: string): Promise<void> {
        await StreetModel.findByIdAndDelete(id);
    }

    async update(street: Street): Promise<void> {
        await StreetModel.findByIdAndUpdate(street.id, {
            name: street.name.toString(),
        });
    }
}
