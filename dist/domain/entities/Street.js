"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Street = void 0;
class Street {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name.toString()
        };
    }
}
exports.Street = Street;
