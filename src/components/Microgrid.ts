export class Microgrid {
    private isIslanded: boolean = false;
    private resources: string[] = []; // List of resources in the microgrid

    island(): void {
        this.isIslanded = true;
    }

    connectToGrid(): void {
        this.isIslanded = false;
    }

    addResource(resource: string): void {
        this.resources.push(resource);
    }

    getResources(): string[] {
        return this.resources;
    }

    isMicrogridIslanded(): boolean {
        return this.isIslanded;
    }
}
