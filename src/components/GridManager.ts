export class GridManager {
    private load: number = 0;

    addLoad(amount: number): void {
        this.load += amount;
    }

    reduceLoad(amount: number): void {
        this.load -= amount;
    }

    getLoad(): number {
        return this.load;
    }
}
