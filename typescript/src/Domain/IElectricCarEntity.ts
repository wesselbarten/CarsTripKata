import { ICarEntity } from "./ICarEntity";

export interface IElectricCarEntity extends ICarEntity {
    charge(kWh: number): void
    currentCharge(): number
}