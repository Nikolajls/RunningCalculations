import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';
import { Pace } from '../shared/models/pace.model';
import { Kilometer, DistanceUnit, Meter } from '../shared/models/distance.model';
import { TimeUnit } from '../shared/models/timeunit.model';
import { Run } from '../shared/models/run.model';
import { Timespan } from '../shared/models/timespan.model';

describe('CalculationService', () => {
    let service: CalculationService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    //   //Pace conversions.
    it("Convert pace  12km/h and distance 3 km to factor 0.25", () => {
        let originalPace = new Pace(new Kilometer(12), TimeUnit.Hour);
        let originalDistance = new Kilometer(3);
        let speedFactor = service.calculateSpeedFactor(originalPace, originalDistance);
        expect(speedFactor).toEqual(0.25);
    });

    //   //Pace conversions.
    it("Convert pace  12km/h and distance 6 km to factor 0.5", () => {
        let originalPace = new Pace(new Kilometer(12), TimeUnit.Hour);
        let originalDistance = new Kilometer(6);
        let speedFactor = service.calculateSpeedFactor(originalPace, originalDistance);
        expect(speedFactor).toEqual(0.50);
    });

    it("Convert pace  12km/h and distance 24 km to factor 2", () => {
        let originalPace = new Pace(new Kilometer(12), TimeUnit.Hour);
        let originalDistance = new Kilometer(24);
        let speedFactor = service.calculateSpeedFactor(originalPace, originalDistance);
        expect(speedFactor).toEqual(2);
    });

    
    it("Calculate time to 15 minutes using run with 12kmh and distance 3 km", () => {
        let run = new Run();
        run.pace = new Pace(new Kilometer(12), TimeUnit.Hour);
        run.distance = new Kilometer(3);
        run.time = service.calculateTime(run);
        expect(run.time).toEqual(new Timespan(0, 0, 15, 0));
    });

    it("Calculate pace to 12km/h using run with 15minutes and distance 3 km", () => {
        let run = new Run();
        run.distance = new Kilometer(3);
        run.time = new Timespan(0, 0, 15, 0);
        run.pace = service.calculatePace(run, DistanceUnit.KM, TimeUnit.Hour);

        expect(run.pace.Unit).toEqual(TimeUnit.Hour);
        expect(run.pace.paceDistance.getLength()).toEqual(new Kilometer(12).getLength());
    });

    it("Calculate distance to 3km using run with 15minutes and distance and pace 12000meters/h", () => {
        let run = new Run();
        run.time = new Timespan(0, 0, 15, 0);
        run.pace = new Pace(new Meter(12000), TimeUnit.Hour);
        run.distance = service.calculateDistance(run, DistanceUnit.KM);
        expect(run.distance.getUnit()).toEqual(DistanceUnit.KM);
        expect(run.distance.getLength()).toEqual(3);
    });
});
