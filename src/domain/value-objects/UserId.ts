export class UserId {
    constructor(private readonly id: string) { }

    get value(): string {
        return this.id;
    }
}