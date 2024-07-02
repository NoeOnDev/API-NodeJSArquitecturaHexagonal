// src/domain/value-objects/StreetName.ts
export class StreetName {
    private readonly name: string;

    constructor(name: string) {
        if (!this.validate(name)) {
            throw new Error('Invalid street name');
        }
        this.name = name;
    }

    private validate(name: string): boolean {
        return name.length > 0;
    }

    toString(): string {
        return this.name;
    }
}
