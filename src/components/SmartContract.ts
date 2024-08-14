export interface Transaction {
    from: string;
    to: string;
    amount: number;
    timestamp: Date;
}

export class SmartContract {
    private contractAddress: string;
    private transactionHistory: Transaction[] = [];

    constructor(address: string) {
        this.contractAddress = address;
    }

    executeTransaction(transaction: Transaction): boolean {
        // Logic to execute a transaction
        this.transactionHistory.push(transaction);
        return true; // Assume the transaction is always successful for simplicity
    }

    getTransactionHistory(): Transaction[] {
        return this.transactionHistory;
    }
}
