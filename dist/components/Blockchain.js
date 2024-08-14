"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
class Blockchain {
    constructor() {
        this.chain = [];
    }
    addTransaction(transaction) {
        this.chain.push(transaction);
    }
    getChain() {
        return this.chain;
    }
    verifyTransaction(transaction) {
        // Simplified verification process (more complex logic in real applications)
        return transaction.amount > 0;
    }
}
exports.Blockchain = Blockchain;
