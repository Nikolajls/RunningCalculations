import { Injectable } from '@angular/core';
import { Run } from "../shared/models/run.model"
import { DistanceUnit, Distance } from '../shared/models/distance.model';
import {  Pace } from '../shared/models/pace.model';
import { Timespan } from '../shared/models/timespan.model';
import { TimeUnit } from '../shared/models/timeunit.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  public convertSpeedUnit(pace: Pace, distanceunit: DistanceUnit): number {
    if (distanceunit === pace.distanceUnit) {
      return pace.speed;
    }
    if (pace.distanceUnit == DistanceUnit.KM && distanceunit == DistanceUnit.M) {
      return pace.speed * 1000;
    } else if (pace.distanceUnit == DistanceUnit.M && distanceunit == DistanceUnit.KM) {
      return pace.speed / 1000;
    }
  }


  public convertDistanceToUnit(distance: Distance, newUnit: DistanceUnit): Distance {
    if (distance.unit == newUnit) {
      return distance;
    }

    if (distance.unit == DistanceUnit.M && newUnit == DistanceUnit.KM) {
      return new Distance(distance.length / 1000, newUnit);
    } else if (distance.unit == DistanceUnit.KM && newUnit == DistanceUnit.M) {
      return new Distance(distance.length * 1000, newUnit);
    }
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
