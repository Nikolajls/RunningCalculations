import { Component } from '@angular/core';
import { ConversionService } from './services/conversion.service';
import { CalculationService } from './services/calculation.service';
import { Run } from './shared/models/run.model';
import { Timespan } from './shared/models/timespan.model';
import { Distance, DistanceUnit } from './shared/models/distance.model';
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
  }

  public testTime() {
    let run = new Run();
    run.pace = new Pace(250, TimeUnit.Minute, DistanceUnit.M);
    run.distance = new Distance(3, DistanceUnit.KM);
    var result = this.calculationService.calculateTime(run);

  }

  public testDistance() {
    let run = new Run();
    run.time = new Timespan(0, 0, 15, 0);
    run.pace = new Pace(100, TimeUnit.Second, DistanceUnit.KM);
    var result = this.calculationService.calculateDistance(run, DistanceUnit.M);
  }


  public testPace() {
    let run = new Run();
    run.distance = new Distance(3, DistanceUnit.KM)
    run.time = new Timespan(0, 0, 15, 0);
    var result = this.calculationService.calculatePace(run, DistanceUnit.M, TimeUnit.Second);
  }
}
