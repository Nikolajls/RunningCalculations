import { Injectable } from '@angular/core';
import { Run } from "../shared/models/run.model"
import { DistanceUnit, Distance } from '../shared/models/distance.model';
import { PaceUnit, Pace } from '../shared/models/pace.model';
import { Timespan } from '../shared/models/timespan.model';

import { timer } from 'rxjs';
import { ConversionService } from './conversion.service';
@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private conversionService: ConversionService) { }


  public calculatePace(initialRun: Run, desiredDistanceUnit: DistanceUnit, desiredPaceUnit: PaceUnit): Pace {
    console.log(`The runner ran ${initialRun.distance.length} ${initialRun.distance.unit} in ${initialRun.time.toString()}`);
    let distance = this.conversionService.ConvertToUnit(initialRun.distance, desiredDistanceUnit);
    let time = this.conversionService.convertTimeStampToUnitNumber(initialRun.time, desiredPaceUnit);
    let pace = new Pace(distance.length / time, desiredPaceUnit, desiredDistanceUnit);

    console.log(`Initial distance ${initialRun.distance.length} ${initialRun.distance.unit} calculation will be used with:${distance.length} ${distance.unit}`)
    console.log(`The run was run in a pace of ${pace.toString()}`)
    return pace;
  }

}
