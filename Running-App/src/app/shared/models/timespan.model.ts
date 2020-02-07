export class Timespan {
    public days: number;
    public hours: number;
    public minutes: number;
    public seconds: number;

    public totalDays(): number{
        return this.totalSeconds() / 60 / 60 / 24;
    }

    public totalHours(): number{
        return this.totalSeconds() / 60 / 60 ;
    }

    public totalMinutes(): number{
        return this.totalSeconds() / 60;
    }

    public totalSeconds(): number{
        var minutesInSeconds = this.minutes * 60;
        var hoursInseconds = this.hours * 60 * 60;
        var daysInSeconds = this.days * 24 * 60 * 60;
        var totalSeconds = this.seconds + minutesInSeconds + hoursInseconds + daysInSeconds;
        return totalSeconds;
    }

    public toString(): string {
        return `${this.days}:${this.days}:${this.minutes}:${this.seconds}`;
    } 
}
