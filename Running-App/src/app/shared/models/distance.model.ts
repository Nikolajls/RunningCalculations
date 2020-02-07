export enum DistanceUnit{
 KM = "KM",
 M = "M"
}

export class Distance {
    public length: number;
    public unit: DistanceUnit;

    constructor(length: number, unit: DistanceUnit){
        this.length = length;
        this.unit = unit;
    }

    public toString():string{
        return `${this.length} ${this.unit}`;
    }
}
