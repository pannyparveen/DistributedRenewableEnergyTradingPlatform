// src/decorators/SecurityDecorator.ts
export function secureTransaction(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    // Check if the method exists in the descriptor
    if (!descriptor.value) {
        throw new Error('Descriptor value is missing');
    }

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): boolean {
        // Perform security checks before executing the original method
        const MAX_TRANSACTION_AMOUNT = 1000;
        const amount = args[2]; // Assuming the third argument is the transaction amount

        if (amount > MAX_TRANSACTION_AMOUNT) {
            console.log('Transaction amount exceeds the limit. Transaction cancelled.');
            return false;
        }

        // Call the original method
        const result = originalMethod.apply(this, args);

        // Ensure the result is a boolean as expected
        if (typeof result !== 'boolean') {
            throw new Error('Return type of method must be boolean');
        }

        return result;
    };

    return descriptor;
}
