import {randomUUID, UUID} from "node:crypto";
import {CarModel, PetrolCarModel} from "./CarModel";
import { IPetrolCarEntity } from "./IPetrolCarEntity";
import { Car } from "./Car";

export class PetrolCar extends Car implements IPetrolCarEntity{
    private readonly fuelConsumption:number; // unit is l/100 km
    private readonly tankCapacity: number;
    private fuelAvailable: number;

    constructor(public modelInfo: PetrolCarModel) {
        super(modelInfo);
        this.fuelConsumption = modelInfo.fuelConsumption;
        this.tankCapacity = modelInfo.tankCapacity;
        this.fuelAvailable = 0;
    }

    public refillGasoline(liters: number): void {
        this.fuelAvailable += liters;
        if (this.fuelAvailable > this.tankCapacity) {
            this.fuelAvailable = this.tankCapacity;
        }
    }

    public fuelAmount(): number {
        return this.fuelAvailable;
    }

    public data(): string {
        return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nFuel Available: ${this.fuelAmount()} l`;
    }

    public travel(distance: number) {
        const tripFuelConsumption = this.calculateTripFuelConsumption(distance);
        this.fuelAvailable -= tripFuelConsumption;
        this.totalMileage += distance;
    }    

    private calculateTripFuelConsumption(distance: number) {
        //consumption unit is l/100 km
        return this.fuelConsumption * distance / 100;
    }
}