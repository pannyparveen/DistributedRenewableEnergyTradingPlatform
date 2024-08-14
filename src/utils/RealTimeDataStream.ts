export class RealTimeDataStream {
    private data: number[] = [];

    async fetchData(): Promise<number[]> {
        // Simulate fetching data
        return new Promise((resolve) => {
            setTimeout(() => {
                this.data.push(Math.random() * 100);
                resolve(this.data);
            }, 1000);
        });
    }

    getData(): number[] {
        return this.data;
    }
}
