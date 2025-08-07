import {Brand} from "./Brand";

export interface CarModel {
    brand: Brand;
    model: string;
}

export interface PetrolCarModel extends CarModel {
    fuelConsumption: number;
    tankCapacity: number;
}