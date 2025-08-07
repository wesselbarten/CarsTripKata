import { ElectricCar } from "../src/Domain/ElectricCar";
import {PetrolCar} from "../src/Domain/PetrolCar";
import {AvailableVehicles} from "../src/Domain/Primitives/AvailableVehicles";

describe('Petrol car', () => {
    it('should be instantiated with zero mileage', () => {
        const car = new PetrolCar(AvailableVehicles.Toyota.Corolla);
        const mileage = car.mileage();
        const amountOfFuelAvailable = car.fuelAmount();
        expect(mileage).toBe(0);
        expect(amountOfFuelAvailable).toBe(0);
        expect(car.name()).toContain("Toyota");
        expect(car.name()).toContain("Corolla");
        expect(car.data()).toContain("Total Mileage: 0 Km");
        expect(car.data()).toContain("Fuel Available: 0 l");
    });

    it('should be filled with gasoline', () => {
        const car = new PetrolCar(AvailableVehicles.Toyota.Corolla);
        car.refillGasoline(15);
        const amountOfFuelAvailable = car.fuelAmount();
        expect(amountOfFuelAvailable).toBe(15);
    });

    it('should be filled with gasoline not more than tank capacity', () => {
        const car = new PetrolCar(AvailableVehicles.Toyota.Camry);
        car.refillGasoline(75);
        const amountOfFuelAvailable = car.fuelAmount();
        expect(amountOfFuelAvailable).toBe(40);
    });

    it('should be able to travel using the fuel', () => {
        const car = new PetrolCar(AvailableVehicles.Toyota.Camry);
        car.refillGasoline(15);
        car.travel(100);
        const amountOfFuelAvailable = car.fuelAmount();
        expect(amountOfFuelAvailable).toBe(8);
        expect(car.data()).toContain("Fuel Available: 8 l");
    });

    it('should add up mileage after every trip', () => {
        const car = new PetrolCar(AvailableVehicles.Toyota.Camry);
        car.refillGasoline(15);
        car.travel(100);
        expect(car.mileage()).toBe(100);
    });

    it('should be able to travel using the fuel', () => {
        const car = new PetrolCar(AvailableVehicles.Toyota.Camry);
        car.refillGasoline(14);
        car.travel(50);
        const amountOfFuelAvailable = car.fuelAmount();
        expect(amountOfFuelAvailable).toBe(10.5);
        expect(car.data()).toContain("Fuel Available: 10.5 l");
    });
});

describe('Electric car', () => {
    it('should be instantiated with zero mileage', () => {
        const car = new ElectricCar(AvailableVehicles.Tesla.ModelX);
        const mileage = car.mileage();
        const currentCharge = car.currentCharge();
        expect(mileage).toBe(0);
        expect(currentCharge).toBe(0);
        expect(car.name()).toContain("Tesla");
        expect(car.name()).toContain("Model X");
        expect(car.data()).toContain("Total Mileage: 0 Km");
        expect(car.data()).toContain("Battery Charge Available: 0 kWh");
    });

    it(`should be charged with electricity`, () => {
        const car = new ElectricCar(AvailableVehicles.Tesla.ModelS);
        car.charge(50);
        const currentCharge = car.currentCharge();
        expect(currentCharge).toBe(50);
    });

    it(`should combine multiple electricity charges`, () => {
        const car = new ElectricCar(AvailableVehicles.Tesla.ModelS);
        car.charge(50);
        car.charge(20);
        const currentCharge = car.currentCharge();
        expect(currentCharge).toBe(70);
    });

    it(`should be charged with not more than the battery capacity`, () => {
        const car = new ElectricCar(AvailableVehicles.Tesla.ModelS);
        car.charge(150);
        const currentCharge = car.currentCharge();
        expect(currentCharge).toBe(100);
    });
});