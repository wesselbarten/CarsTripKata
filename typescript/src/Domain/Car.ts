import {randomUUID, UUID} from "node:crypto";
import { ICarEntity } from "./ICarEntity";
import { CarModel } from "./CarModel";

export abstract class Car implements ICarEntity {

    private readonly _id:UUID = randomUUID();
    private readonly brand: string;
    private readonly model: string;

    constructor(public modelInfo: CarModel) {
        this.brand = modelInfo.brand;
        this.model = modelInfo.model;
    }

    public id(): UUID {
        return this._id;
    }

    public name(): string {
        return `${this.brand} ${this.model} ${this.id()}`;
    }

    abstract data(): string

    abstract travel(distance: number): void
}