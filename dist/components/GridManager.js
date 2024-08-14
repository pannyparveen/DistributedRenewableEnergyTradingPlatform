"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridManager = void 0;
class GridManager {
    constructor() {
        this.load = 0;
    }
    addLoad(amount) {
        this.load += amount;
    }
    reduceLoad(amount) {
        this.load -= amount;
    }
    getLoad() {
        return this.load;
    }
}
exports.GridManager = GridManager;
