import {DistanceUnit} from "./distance.model";
import { TimeUnit } from './timeunit.model';

export class Pace {
    public speed: number;
    public distanceUnit: DistanceUnit;
    public Unit: TimeUnit;
    constructor(time:number, unit: TimeUnit, distanceUnit: DistanceUnit){
        this.speed = time;
        this.Unit = unit;
        this.distanceUnit =  distanceUnit;
    }

    public toString(): string{
        return `${this.speed} ${this.distanceUnit}/${this.Unit}`
    }
}
