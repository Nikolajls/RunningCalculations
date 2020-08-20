export enum DistanceUnit{
 KM = "KM",
 M = "M"
}

export interface IDistance{
    length: number;
    convertTo(newUnit:DistanceUnit):IDistance
}

export abstract class DistanceBase implements IDistance{
    abstract length:number;
    abstract convertTo(newUnit:DistanceUnit):IDistance
 
}

export class Kilometer extends DistanceBase{ 
    constructor(public length: number){
        super();
        if(length < 0.0001)
            throw new Error("Unable to create kilometer with less than 1");
    }

    private GetMeters():Meter{
        return new Meter(length * 1000);
    }
    public convertTo(newUnit: DistanceUnit): IDistance {
        if(newUnit == DistanceUnit.M){
            return this.GetMeters();
        }
        return this;
    }
}

export class Meter extends DistanceBase{
    constructor(public length: number){
        super();
        if(length < 0.0001)
            throw new Error("Unable to create meter with less than 1");
    }

    public GetKilometers():Kilometer{
        return new Kilometer(length / 1000);
    }

    convertTo(newUnit: DistanceUnit): IDistance {
        if(newUnit == DistanceUnit.M){
            return this.GetKilometers();
        }
        return this;
    }
}