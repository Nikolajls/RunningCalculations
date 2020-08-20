import { Injectable } from '@angular/core';
import { Run } from "../shared/models/run.model"
import { DistanceUnit, Meter, Kilometer, IDistance } from '../shared/models/distance.model';
import {  Pace } from '../shared/models/pace.model';
import { Timespan } from '../shared/models/timespan.model';
import { TimeUnit } from '../shared/models/timeunit.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  /**
   * Takes a pace object that describes what pace the run was done with - and the type of distance of it.
   * Then calculates the 
   * @param pace 
   * @param distanceunit 
   */
  public convertSpeedUnit(pace: Pace, distance: IDistance): number {
    if (distanceunit === pace.distanceUnit) {
      return pace.speed;
    }
    if (pace.distanceUnit == DistanceUnit.KM && distanceunit == DistanceUnit.M) {
      return pace.speed * 1000;
    } else if (pace.distanceUnit == DistanceUnit.M && distanceunit == DistanceUnit.KM) {
      return pace.speed / 1000;
    }
  }


  public convertToDistanceUnit(currentDistance: IDistance, newUnit: DistanceUnit): IDistance {
   return currentDistance.convertTo(newUnit);
  }

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
