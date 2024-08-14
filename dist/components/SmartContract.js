"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartContract = void 0;
class SmartContract {
    constructor(address) {
        this.transactionHistory = [];
        this.contractAddress = address;
    }
    executeTransaction(transaction) {
        // Logic to execute a transaction
        this.transactionHistory.push(transaction);
        return true; // Assume the transaction is always successful for simplicity
    }
    getTransactionHistory() {
        return this.transactionHistory;
    }
}
exports.SmartContract = SmartContract;
