// src/domain/entities/Street.ts
import { v4 as uuidv4 } from 'uuid';

export class Street {
    constructor(
        public id: string = uuidv4(),
        public name: string,
    ) { }
}
