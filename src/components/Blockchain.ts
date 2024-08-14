import { Transaction } from './SmartContract';

export class Blockchain {
    private chain: Transaction[] = [];

    addTransaction(transaction: Transaction): void {
        this.chain.push(transaction);
    }

    getChain(): Transaction[] {
        return this.chain;
    }

    verifyTransaction(transaction: Transaction): boolean {
        // Simplified verification process (more complex logic in real applications)
        return transaction.amount > 0;
    }
}
