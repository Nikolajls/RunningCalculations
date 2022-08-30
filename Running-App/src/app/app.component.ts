import { Component } from '@angular/core';
import { ConversionService } from './services/conversion.service';
import { CalculationService } from './services/calculation.service';
import { Run } from './shared/models/run.model';
import { Timespan } from './shared/models/timespan.model';
import { IDistance, DistanceUnit, Kilometer, Meter, Mile } from './shared/models/distance.model';
import { Pace } from './shared/models/pace.model';
import { TimeUnit } from './shared/models/timeunit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Running-App';

  constructor(private calculationService: CalculationService) {
    console.log("Running app component ctor");
    this.testTime();

   this.testDistance();
   this.testPace();
  }

  public testTime() {
    let run = new Run();
    run.pace = new Pace(new Kilometer(12), TimeUnit.Hour);// 12km/h  distance 3000 meters = 15 m
    run.distance = new Meter(3000);
    
    console.log("testTime initial", run);
    var result = this.calculationService.calculateTime(run);
    console.log("testTime end", result);
  }

  public testDistance() {
    let run = new Run();
    run.time = new Timespan(0, 0, 11, 40);
    run.pace = new Pace(new Kilometer(16), TimeUnit.Hour);// 12km/h  distance 3000 meters = 15 m
    
    console.log("testDistance initial", run);
    var result = this.calculationService.calculateDistance(run, DistanceUnit.KM);
     console.log("testDistance result", result);
  }


  public testPace() {
    let run = new Run();
    run.distance = new Meter(3000)
    run.time = new Timespan(0, 0, 15, 0);
    
    console.log("testPace initial", run);
    var result = this.calculationService.calculatePace(run, DistanceUnit.M, TimeUnit.Minute);
    console.log("testPace result", result);
  }
}
