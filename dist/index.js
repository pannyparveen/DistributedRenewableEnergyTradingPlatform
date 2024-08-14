"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmartMeter_1 = require("./components/SmartMeter");
const AIEngine_1 = require("./components/AIEngine");
const Blockchain_1 = require("./components/Blockchain");
const SmartContract_1 = require("./components/SmartContract");
const EnergyTrader_1 = require("./components/EnergyTrader");
const GridManager_1 = require("./components/GridManager");
const Microgrid_1 = require("./components/Microgrid");
const RealTimeDataStream_1 = require("./utils/RealTimeDataStream");
// Initialize components
const smartMeter = new SmartMeter_1.SmartMeter();
const aiEngine = new AIEngine_1.AIEngine();
const blockchain = new Blockchain_1.Blockchain();
const smartContract = new SmartContract_1.SmartContract('0x123');
const energyTrader = new EnergyTrader_1.EnergyTrader(smartContract);
const gridManager = new GridManager_1.GridManager();
const microgrid = new Microgrid_1.Microgrid();
const dataStream = new RealTimeDataStream_1.RealTimeDataStream();
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield dataStream.fetchData();
    console.log(`Real-Time Data: ${data.join(', ')}`);
}))();
