import { Injectable } from '@angular/core';
import { Run } from "../shared/models/run.model"
import { DistanceUnit, Meter, Kilometer, IDistance, Mile } from '../shared/models/distance.model';
import {  Pace } from '../shared/models/pace.model';
import { Timespan } from '../shared/models/timespan.model';
import { TimeUnit } from '../shared/models/timeunit.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

 


  /**
   * Takes a distance and converts it to another distance.
   * TODO: Should properly be refactored into a factory or similar.
   * @param currentDistance the current distance
   * @param newUnit the new unit the distance should be of
   */
  public convertDistance(currentDistance: IDistance, newUnit: DistanceUnit): IDistance {
    let distanceInMeters = currentDistance.toMeters().getLength();

    if (newUnit == DistanceUnit.KM) {
      return new Kilometer().fromMeters(distanceInMeters);
    } else if (newUnit == DistanceUnit.Miles) {
      return new Mile().fromMeters(distanceInMeters);
    }
    return new Meter(distanceInMeters);
  }

  /**
   * Takes as timespan and converts the time in it to a number that represensts that the total timespan in that unit.
   * @param time 
   * @param timeUnit 
   */
  public convertTimeStampToUnitNumber(time: Timespan, timeUnit: TimeUnit) {
    if (timeUnit == TimeUnit.Day) {
      return time.totalDays();
    } else if (timeUnit == TimeUnit.Hour) {
      return time.totalHours();
    } else if (timeUnit == TimeUnit.Minute) {
      return time.totalMinutes();
    } else if (timeUnit == TimeUnit.Second) {
      return time.totalSeconds();
    }
  }
}
