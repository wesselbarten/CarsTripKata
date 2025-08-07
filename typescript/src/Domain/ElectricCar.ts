import { Car } from "./Car";
import { ElectricCarModel } from "./CarModel";
import { IElectricCarEntity } from "./IElectricCarEntity";

export class ElectricCar extends Car implements IElectricCarEntity {

    private _currentCharge: number = 0;

    constructor(public modelInfo: ElectricCarModel) {
        super(modelInfo);
    }

    charge(kWh: number): void {
        
    }

    currentCharge(): number {
        return this._currentCharge;
    }

    data(): string {
        return "";
    }

    travel(distance: number): void {
        
    }
}