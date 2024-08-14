// src/components/EnergyTrader.ts
import { SmartContract, Transaction } from './SmartContract';
import { secureTransaction } from '../decorators/SecurityDecorator';

export class EnergyTrader {
    private smartContract: SmartContract;

    constructor(smartContract: SmartContract) {
        this.smartContract = smartContract;
    }

    @secureTransaction
    tradeEnergy(from: string, to: string, amount: number): boolean {
        const transaction: Transaction = {
            from,
            to,
            amount,
            timestamp: new Date()
        };

        // Execute the transaction
        return this.smartContract.executeTransaction(transaction);
    }

    getTransactionHistory(): Transaction[] {
        return this.smartContract.getTransactionHistory();
    }
}
