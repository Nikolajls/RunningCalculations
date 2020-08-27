import {DistanceUnit, IDistance} from "./distance.model";
import { TimeUnit } from './timeunit.model';

export class Pace {
    constructor(  public paceDistance: IDistance, public Unit: TimeUnit){
    }

    public toString(): string{
       return `${this.paceDistance.getLength()} ${this.paceDistance.getUnit().toString() }/${this.Unit}`
    }
}
