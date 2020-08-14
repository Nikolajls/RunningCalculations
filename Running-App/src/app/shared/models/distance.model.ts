export enum DistanceUnit{
 KM = "KM",
 M = "M"
}

export class Distance {
    public length: number;
    public unit: DistanceUnit;

    constructor(length: number, unit: DistanceUnit){
        if(length < 0.0001)
            throw new Error("Unable to create distance with less than 1");
        this.length = length;
        this.unit = unit;
    }

    public toString():string{
        return `${this.length} ${this.unit}`;
    }
}
