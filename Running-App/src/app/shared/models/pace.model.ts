import {DistanceUnit, IDistance} from "./distance.model";
import { TimeUnit } from './timeunit.model';

export class Pace {
    constructor(  public paceDistance: IDistance, public Unit: TimeUnit){
    }

    public toString(): string{
        return "";
     //   return `${this.speed} ${this.distanceUnit}/${this.Unit}`
    }
}
