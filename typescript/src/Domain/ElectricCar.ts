import { Car } from "./Car";
import { ElectricCarModel } from "./CarModel";
import { IElectricCarEntity } from "./IElectricCarEntity";

export class ElectricCar extends Car implements IElectricCarEntity {

    private readonly batteryCapacity: number;
    private chargeAvailable: number = 0;

    constructor(public modelInfo: ElectricCarModel) {
        super(modelInfo);
        this.batteryCapacity = modelInfo.batteryCapacity;
    }

    public charge(kWh: number): void {
        this.chargeAvailable += kWh;
        if (this.chargeAvailable > this.batteryCapacity) {
            this.chargeAvailable = this.batteryCapacity;
        }
    }

    public currentCharge(): number {
        return this.chargeAvailable;
    }

    public data(): string {
        return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nBattery Charge Available: ${this.currentCharge()} kWh`;
    }

    public travel(distance: number): void {
        
    }
}