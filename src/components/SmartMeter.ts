export class SmartMeter {
    private energyProduced: number;
    private energyConsumed: number;

    constructor() {
        this.energyProduced = 0;
        this.energyConsumed = 0;
    }

    recordProduction(amount: number): void {
        this.energyProduced += amount;
    }

    recordConsumption(amount: number): void {
        this.energyConsumed += amount;
    }

    getNetProduction(): number {
        return this.energyProduced - this.energyConsumed;
    }

    getEnergyProduced(): number {
        return this.energyProduced;
    }

    getEnergyConsumed(): number {
        return this.energyConsumed;
    }
}
