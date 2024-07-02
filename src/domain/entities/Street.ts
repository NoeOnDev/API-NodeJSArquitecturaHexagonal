// src/domain/entities/Street.ts
import { StreetName } from "../value-objects/StreetName";

export class Street {
    constructor(
        public id: string,
        public name: StreetName
    ) { }

    toJSON() {
        return {
            id: this.id,
            name: this.name.toString()
        };
    }
}
