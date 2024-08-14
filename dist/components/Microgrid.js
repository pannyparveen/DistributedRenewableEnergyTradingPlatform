"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microgrid = void 0;
class Microgrid {
    constructor() {
        this.isIslanded = false;
        this.resources = []; // List of resources in the microgrid
    }
    island() {
        this.isIslanded = true;
    }
    connectToGrid() {
        this.isIslanded = false;
    }
    addResource(resource) {
        this.resources.push(resource);
    }
    getResources() {
        return this.resources;
    }
    isMicrogridIslanded() {
        return this.isIslanded;
    }
}
exports.Microgrid = Microgrid;
