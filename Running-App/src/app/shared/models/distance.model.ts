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
    abstract toMeters(): Meter;
    abstract getUnit(): DistanceUnit;
    abstract fromMeters(meters: number): IDistance;
    constructor(protected length: number = 0) {

    }
    getLength(): number {
        return this.length;
    }
}

export class Meter extends DistanceBase {
    protected meterFactor: number = 1;
    public getUnit(): DistanceUnit {
        return DistanceUnit.M;
    }

    constructor(initialLength: number = 1) {
        super(initialLength);
    }
    toMeters(): Meter {
        return this;
    }

    fromMeters(meters: number): IDistance {
        this.length = meters;
        return this;
    }

}

export class Kilometer extends DistanceBase {
    protected meterFactor: number = 1000;
    public getUnit(): DistanceUnit {
        return DistanceUnit.KM;
    }

    constructor(initialLength: number = 1) {
        super(initialLength);
    }
    toMeters(): Meter {
        let inMeters = this.length * this.meterFactor;
        let meters = new Meter();
        meters.fromMeters(inMeters);
        return meters;
    }

    fromMeters(meters: number): IDistance {
        this.length = meters / this.meterFactor;
        return this;
    }
}

export class Mile extends DistanceBase {
    protected meterFactor: number = 1609.344;

    constructor(initialLength: number = 1) {
        super(initialLength);
    }

    public getUnit(): DistanceUnit {
        return DistanceUnit.Miles;
    }

    toMeters(): Meter {
        let inMeters = this.length * this.meterFactor;
        let meter = new Meter();
        meter.fromMeters(inMeters);
        return meter;
    }

    fromMeters(meters: number): IDistance {
        this.length = meters / this.meterFactor;
        return this;
    }
}


