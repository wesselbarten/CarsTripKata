import { Car } from "./Car";
import { ElectricCarModel } from "./CarModel";
import { IElectricCarEntity } from "./IElectricCarEntity";

export class ElectricCar extends Car implements IElectricCarEntity {

    private _currentCharge: number = 0;

    constructor(public modelInfo: ElectricCarModel) {
        super(modelInfo);
    }

    public charge(kWh: number): void {
        this._currentCharge += kWh;
    }

    public currentCharge(): number {
        return this._currentCharge;
    }

    public data(): string {
        return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nBattery Charge Available: ${this.currentCharge()} kWh`;
    }

    public travel(distance: number): void {
        
    }
}