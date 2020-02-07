import { Component } from '@angular/core';
import {ConversionService} from './services/conversion.service';
import {CalculationService} from './services/calculation.service';
import { Run } from './shared/models/run.model';
import { Timespan } from './shared/models/timespan.model';
import { Distance, DistanceUnit } from './shared/models/distance.model';
import { PaceUnit, Pace } from './shared/models/pace.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Running-App';

  constructor(private calculationService: CalculationService ) {
    console.log("Running app component ctor");
    this.testDistance();
  }
  public testDistance(){
    let run = new Run();
    run.time= new Timespan();
    run.time.days = 0;
    run.time.hours = 0 ;
    run.time.minutes = 15;
    run.time.seconds = 0;
    run.pace = new Pace(100, PaceUnit.PrSecond, DistanceUnit.KM);
    var result = this.calculationService.calculateDistance(run, DistanceUnit.M);
  }


  public testPace() {
   let run = new Run();
   run.distance = new Distance(3, DistanceUnit.KM)
   run.time= new Timespan();
   run.time.days = 0;
   run.time.hours = 0 ;
   run.time.minutes = 15;
   run.time.seconds = 0;
   var result = this.calculationService.calculatePace(run, DistanceUnit.M, PaceUnit.PrSecond);
  }
}
