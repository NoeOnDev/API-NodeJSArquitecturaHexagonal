export class Street {
    constructor(
        private readonly street: string
    ) { }

    get value(): string {
        return this.street;
    }
}