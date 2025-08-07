import { ICarEntity } from "./ICarEntity";

export interface IPetrolCarEntity extends ICarEntity{
    refillGasoline(liters: number): void;
    fuelAmount(): number;
}