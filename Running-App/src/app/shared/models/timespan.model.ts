import { TimeUnit } from './timeunit.model';

export class Timespan {

    static fromUnit(number: number, unit: TimeUnit) {
        //convert all to seconds
        let accSeconds = 0;
        if (unit === TimeUnit.Day) {
            accSeconds = number * 60 * 60 * 24;
        } else if (unit === TimeUnit.Hour) {
            accSeconds = number * 60 * 60;
        } else if (unit === TimeUnit.Minute) {
            accSeconds = number * 60;
        } else {
            accSeconds = number;
        }
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        //Days
        days = Math.floor(accSeconds / (24 * 3600));
        accSeconds = accSeconds % (24 * 3600);
        //Hours
        hours = Math.floor(accSeconds / 3600);
        //Minutes
        accSeconds %= 3600;
        minutes = Math.floor(accSeconds / 60);
        //Seconds
        accSeconds %= 60;
        seconds = accSeconds;
        return new this(days, hours, minutes, seconds)
    }

    constructor(public days: number, public hours: number, public minutes: number, public seconds: number) {
        if (hours > 23)
            throw new RangeError("Hours cannot be more than 23 use the fromData method if needed");
        if (minutes > 59)
            throw new RangeError("Minutes  cannot be more than 59 use the fromData method if needed");
        if (seconds > 59)
            throw new RangeError("Seconds cannot be more than 59 use the fromData method if needed");
    }



    public totalDays(): number {
        return this.totalSeconds() / 60 / 60 / 24;
    }

    public totalHours(): number {
        return this.totalSeconds() / 60 / 60;
    }

    public totalMinutes(): number {
        return this.totalSeconds() / 60;
    }

    public totalSeconds(): number {
        var minutesInSeconds = this.minutes * 60;
        var hoursInseconds = this.hours * 60 * 60;
        var daysInSeconds = this.days * 24 * 60 * 60;
        var totalSeconds = this.seconds + minutesInSeconds + hoursInseconds + daysInSeconds;
        return totalSeconds;
    }

    public toString(): string {
        return `${this.days}:${this.hours}:${this.minutes}:${this.seconds}`;
    }
}
