export enum TimeUnit {
   Day = "DAY",
   Hour = "HOUR",
   Minute = "MINUTE",
   Second = "SECOND"
}

export interface ITimeUnit {
   getUnit(): TimeUnit;
   getDuration(): number;
   toSeconds(): Seconds
   fromSeconds(seconds: number): ITimeUnit
}

export abstract class TimeUnitBase implements ITimeUnit {
   protected abstract secondFactor: number;
   abstract getUnit(): TimeUnit;

   constructor(protected duration: number = 0) {
   }

   toSeconds = () =>  new Seconds(this.secondFactor * this.duration);

   fromSeconds(seconds: number): ITimeUnit{
      this.duration = seconds / this.secondFactor;
      return this;
   }

   getDuration = () => this.duration;
}

export class Day extends TimeUnitBase {
   protected secondFactor = (24 * 60 * 60);
   public getUnit = () =>  TimeUnit.Day;
   constructor(initialDuration: number = 1) {
      super(initialDuration);
   }
}

export class Hours extends TimeUnitBase {
   protected secondFactor = (60 * 60);
   public getUnit = () =>  TimeUnit.Hour;
   constructor(initialDuration: number = 1) {
      super(initialDuration);
   }
}

export class Minutes extends TimeUnitBase {
   protected secondFactor = 60;
   public getUnit = () =>  TimeUnit.Minute;
   constructor(initialDuration: number = 1) {
      super(initialDuration);
   }
}

export class Seconds extends TimeUnitBase {
   protected secondFactor = 1;
   public getUnit = () =>  TimeUnit.Second;

   constructor(initialDuration: number = 1) {
      super(initialDuration);
   }

  
}