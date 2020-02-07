import {DistanceUnit} from "./distance.model";
export enum PaceUnit {
    PrDay = "DAY",
    PrHour = "HOUR",
    PrMinute = "MINUTE",
    PrSecond = "SECOND"
}

export class Pace {
    public speed: number;
    public distanceUnit: DistanceUnit;
    public Unit: PaceUnit;
    constructor(time:number, unit: PaceUnit, distanceUnit: DistanceUnit){
        this.speed = time;
        this.Unit = unit;
        this.distanceUnit =  distanceUnit;
    }

    public toString(): string{
        return `${this.speed} ${this.distanceUnit}/${this.Unit}`
    }
}
