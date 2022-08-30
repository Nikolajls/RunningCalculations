export enum DistanceUnit {
    KM = "KM",
    M = "M",
    Miles = "Miles"
}

export interface IDistance {
    getUnit(): DistanceUnit;
    getLength(): number;
    toMeters(): Meter;
    fromMeters(meters: number): IDistance;

}

export abstract class DistanceBase implements IDistance {
    protected abstract meterFactor: number;
    abstract getUnit(): DistanceUnit;    
    constructor(protected length: number = 0) {

    }
    getLength = () => this.length;

    fromMeters(meters: number): IDistance {
        this.length = meters / this.meterFactor;
        return this;
    }

    toMeters(): Meter {
        let inMeters = this.length * this.meterFactor;
        let meters = new Meter();
        meters.fromMeters(inMeters);
        return meters;
    }
}

export class Meter extends DistanceBase {
    protected meterFactor: number = 1;
    public getUnit = () =>  DistanceUnit.M;

    constructor(initialLength: number = 1) {
        super(initialLength);
    }
}

export class Kilometer extends DistanceBase {
    protected meterFactor: number = 1000;
     public getUnit = () =>  DistanceUnit.KM;

    constructor(initialLength: number = 1) {
        super(initialLength);
    }
}

export class Mile extends DistanceBase {
    protected meterFactor: number = 1609.344;
    public getUnit = () =>  DistanceUnit.Miles;
    
    constructor(initialLength: number = 1) {
        super(initialLength);
    }
}


