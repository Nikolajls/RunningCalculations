import { Injectable } from '@angular/core';
import { Run } from "../shared/models/run.model"
import { DistanceUnit, Distance } from '../shared/models/distance.model';
import { Pace } from '../shared/models/pace.model';
import { Timespan } from '../shared/models/timespan.model';
import {TimeUnit} from '../shared/models/timeunit.model'

import { timer } from 'rxjs';
import { ConversionService } from './conversion.service';
@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private conversionService: ConversionService) { 

  }


  public calculateTime(run: Run):Timespan {
    let speed = this.conversionService.convertSpeedUnit(run.pace, run.distance.unit);
    let time = run.distance.length / speed;  
    console.log("TIME", time, run.pace.Unit);
    let timeSpan = Timespan.fromUnit(time, run.pace.Unit);
    console.log(`${timeSpan.toString()}`)

    return timeSpan;
  }

  public calculateDistance(run: Run, distanceunit: DistanceUnit): Distance {
    let totalTime = this.conversionService.convertTimeStampToUnitNumber(run.time, run.pace.Unit);
    let speed = this.conversionService.convertSpeedUnit(run.pace, distanceunit);
    let distance = new Distance(totalTime * speed, distanceunit);
    return distance;
  }

  public calculatePace(initialRun: Run, desiredDistanceUnit: DistanceUnit, desiredTimeUnit: TimeUnit): Pace {
    let distance = this.conversionService.convertDistanceToUnit(initialRun.distance, desiredDistanceUnit);
    let time = this.conversionService.convertTimeStampToUnitNumber(initialRun.time, desiredTimeUnit);
    let pace = new Pace(distance.length / time, desiredTimeUnit, desiredDistanceUnit);
    return pace;
  }
}
