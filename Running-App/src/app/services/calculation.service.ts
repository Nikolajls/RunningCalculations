import { Injectable } from '@angular/core';
import { Run } from "../shared/models/run.model"
import { DistanceUnit, Kilometer, Meter, IDistance, Mile } from '../shared/models/distance.model';
import { Pace } from '../shared/models/pace.model';
import { Timespan } from '../shared/models/timespan.model';
import { TimeUnit } from '../shared/models/timeunit.model'

import { timer } from 'rxjs';
import { ConversionService } from './conversion.service';
@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private conversionService: ConversionService) {

  }


  /**
   * Calculates the time that a run with a defined pace and distance 
   * @param run The run to calculate from
   */
  public calculateTime(run: Run): Timespan {
    let speed = this.calculateSpeedFactor(run.pace, run.distance);
    let timeSpan = Timespan.fromUnit(speed, run.pace.Unit);
    return timeSpan;
  }

  /**
   * Calculates the distance a run with a defined pace and time took
   * @param run 
   * @param distanceunit the distance unit that specifies what type of Distance implementation to return
   */
  public calculateDistance(run: Run, distanceunit: DistanceUnit): IDistance {
    let totalTime = this.conversionService.convertTimeStampToUnitNumber(run.time, run.pace.Unit);
    let speed = this.calculateSpeedFactor(run.pace, run.pace.paceDistance); 

    let factor = speed / totalTime;
    let paceInMeters = run.pace.paceDistance.toMeters().getLength();
    let meters = paceInMeters / factor;
    let distanceRunInMeters = new Meter(meters);

    let distance = this.conversionService.convertDistance(distanceRunInMeters, distanceunit);
    return distance;
  }

  /**
   * Calculates the pace a run was made with using the defined distance and time it took.
   */
  public calculatePace(initialRun: Run, desiredDistanceUnit: DistanceUnit, desiredTimeUnit: TimeUnit): Pace {
    let distanceInMeters = initialRun.distance.toMeters();
    let time = this.conversionService.convertTimeStampToUnitNumber(initialRun.time, desiredTimeUnit);

    let meters = distanceInMeters.getLength() / time;
    let paceDistanceOnMeters = new Meter(meters);
    let convertedDistance = this.conversionService.convertDistance(paceDistanceOnMeters, desiredDistanceUnit);

    let pace = new Pace(convertedDistance, desiredTimeUnit);
    return pace;
  }

   /**
   * Takes a pace object that describes what pace the run was done with and the distance it was run with.
   * Then calculates the factor by diving distance by pacein meters
   * @param pace 
   * @param distanceunit 
   */
  public calculateSpeedFactor(pace: Pace, distance: IDistance): number {
    let placeInMeters = pace.paceDistance.toMeters().getLength();
    let distanceInMeters =  distance.toMeters().getLength();
    let factor =  distanceInMeters / placeInMeters;
    return factor;
  }
}
