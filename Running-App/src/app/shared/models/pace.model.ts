import {DistanceUnit} from "./distance.model";
export enum PaceUnit {
    PrDay = "DAY",
    PrHour = "HOUR",
    PrMinute = "MINUTE",
    PrSecond = "SECOND"
}

export class Pace {
    public time: number;
    public distanceUnit: DistanceUnit;
    public Unit: PaceUnit;
    constructor(time:number, unit: PaceUnit, distanceUnit: DistanceUnit){
        this.time = time;
        this.Unit = unit;
        this.distanceUnit =  distanceUnit;
    }

    public toString(): string{
        return `${this.time} ${this.distanceUnit}/${this.Unit}`
    }
}
