import { SmartMeter } from './components/SmartMeter';
import { AIEngine } from './components/AIEngine';
import { Blockchain } from './components/Blockchain';
import { SmartContract } from './components/SmartContract';
import { EnergyTrader } from './components/EnergyTrader';
import { GridManager } from './components/GridManager';
import { Microgrid } from './components/Microgrid';
import { RealTimeDataStream } from './utils/RealTimeDataStream';

// Initialize components
const smartMeter = new SmartMeter();
const aiEngine = new AIEngine();
const blockchain = new Blockchain();
const smartContract = new SmartContract('0x123');
const energyTrader = new EnergyTrader(smartContract);
const gridManager = new GridManager();
const microgrid = new Microgrid();
const dataStream = new RealTimeDataStream();

// Record some sample data
smartMeter.recordProduction(100);
smartMeter.recordConsumption(80);

// Predict energy needs
const predictedNeeds = aiEngine.predictEnergyNeeds(smartMeter.getNetProduction());
console.log(`Predicted Energy Needs: ${predictedNeeds} kWh`);

// Perform an energy trade
const transactionSuccess = energyTrader.tradeEnergy('Alice', 'Bob', 20);
console.log(`Transaction Success: ${transactionSuccess}`);

// Manage the grid load
gridManager.addLoad(500);
const currentLoad = gridManager.getLoad();
console.log(`Current Grid Load: ${currentLoad} kW`);

// Microgrid operations
microgrid.addResource('Solar Panel');
microgrid.addResource('Wind Turbine');
microgrid.island();

console.log(`Microgrid Resources: ${microgrid.getResources().join(', ')}`);
console.log(`Is Microgrid Islanded: ${microgrid.isMicrogridIslanded()}`);

// Real-time data stream
(async () => {
    const data = await dataStream.fetchData();
    console.log(`Real-Time Data: ${data.join(', ')}`);
})();
