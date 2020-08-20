export enum TimeUnit {
    Day = "DAY",
    Hour = "HOUR",
    Minute = "MINUTE",
    Second = "SECOND"
}

export interface ITimeUnit{
    time:number;
}

export class Day implements ITimeUnit{
   constructor(public  time: number){}

}

export class Hour implements ITimeUnit{
    constructor(public  time: number){}
 
 }

 export class Minute implements ITimeUnit{
    constructor(public  time: number){}
 
 }

 export class Seconds implements ITimeUnit{
    constructor(public  time: number){}
 
 }