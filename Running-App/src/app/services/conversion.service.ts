import { Injectable } from '@angular/core';
import { Run } from "../shared/models/run.model"
import { DistanceUnit, Distance } from '../shared/models/distance.model';
import { PaceUnit, Pace } from '../shared/models/pace.model';
import { Timespan } from '../shared/models/timespan.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  
  public ConvertToUnit(distance: Distance, newUnit: DistanceUnit): Distance {
    if(distance.unit == newUnit){
      return distance;
    }

    if (distance.unit == DistanceUnit.M && newUnit == DistanceUnit.KM) {
      return new Distance(distance.length / 1000, newUnit);
    } else if (distance.unit == DistanceUnit.KM && newUnit == DistanceUnit.M) {
      return new Distance(distance.length * 1000, newUnit);
    }
  }

  public convertTimeStampToUnitNumber(time: Timespan, paceUnit: PaceUnit) {
    if (paceUnit == PaceUnit.PrDay) {
      return time.totalDays();
    } else if (paceUnit == PaceUnit.PrHour) {
      return time.totalHours();
    } else if (paceUnit == PaceUnit.PrMinute) {
      return time.totalMinutes();
    } else if (paceUnit == PaceUnit.PrSecond) {
      return time.totalSeconds();
    }
  }
}
