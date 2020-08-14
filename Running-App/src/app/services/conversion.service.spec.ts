import { TestBed } from '@angular/core/testing';

import { ConversionService } from './conversion.service';
import { Distance, DistanceUnit } from '../shared/models/distance.model';
import { Pace } from '../shared/models/pace.model';
import { TimeUnit } from '../shared/models/timeunit.model';

describe('ConversionService', () => {
  let service: ConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // Distance conversion tests
  it('should convert distance 1000 meters to 1 km ', () => {
    let newDistance = service.convertDistanceToUnit(new Distance(1000, DistanceUnit.M), DistanceUnit.KM)
    let expectedNewDistance = new Distance(1, DistanceUnit.KM);
    expect(newDistance).toEqual(expectedNewDistance);  
  });

  it('should convert distance 432 meters to 0.432 km ', () => {
    let newDistance = service.convertDistanceToUnit(new Distance(432, DistanceUnit.M), DistanceUnit.KM)
    let expectedNewDistance = new Distance(0.432, DistanceUnit.KM);
    expect(newDistance).toEqual(expectedNewDistance);  
  });

  it('should convert  distance  3 km  to 3000 meters ', () => {
    let newDistance = service.convertDistanceToUnit(new Distance(3, DistanceUnit.KM), DistanceUnit.M)
    let expectedNewDistance = new Distance(3000, DistanceUnit.M);
    expect(newDistance).toEqual(expectedNewDistance);  
  });

  it('should convert  distance  1.234 km  to 1234 meters ', () => {
    let newDistance = service.convertDistanceToUnit(new Distance(1.234, DistanceUnit.KM), DistanceUnit.M)
    let expectedNewDistance = new Distance(1234, DistanceUnit.M);
    expect(newDistance).toEqual(expectedNewDistance);  
  });

  it('should return same  distance when asking for same unit ', () => {
    let originalDistance = new Distance(322, DistanceUnit.KM);
    let newDistance = service.convertDistanceToUnit(originalDistance, DistanceUnit.KM)
    expect(newDistance).toEqual(originalDistance);  
  });

  //Pace conversions.
  it("Convert pace  12.5km/h to the distance in meters", () =>{
    let originalPace = new Pace(12.5, TimeUnit.Hour, DistanceUnit.KM);
    let distanceInUnit = service.convertSpeedUnit(originalPace, DistanceUnit.M);
    expect(distanceInUnit).toEqual(12500);
 });


  it("Convert pace  990m/h to the distance in meters", () =>{
    let originalPace = new Pace(990, TimeUnit.Minute, DistanceUnit.M);
    let distanceInUnit = service.convertSpeedUnit(originalPace, DistanceUnit.KM);
    expect(distanceInUnit).toEqual(0.99);
  });

});
