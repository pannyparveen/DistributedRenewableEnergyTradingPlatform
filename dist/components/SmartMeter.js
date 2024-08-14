"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartMeter = void 0;
class SmartMeter {
    constructor() {
        this.energyProduced = 0;
        this.energyConsumed = 0;
    }
    recordProduction(amount) {
        this.energyProduced += amount;
    }
    recordConsumption(amount) {
        this.energyConsumed += amount;
    }
    getNetProduction() {
        return this.energyProduced - this.energyConsumed;
    }
    getEnergyProduced() {
        return this.energyProduced;
    }
    getEnergyConsumed() {
        return this.energyConsumed;
    }
}
exports.SmartMeter = SmartMeter;
