import {Brand} from "./Brand";

export interface CarModel {
    brand: Brand;
    model: string;
}

export interface PetrolCarModel extends CarModel {
    fuelConsumption: number;
    tankCapacity: number;
}

export interface ElectricCarModel extends CarModel {
    energyConsumption: number;
    batteryCapacity: number;
}