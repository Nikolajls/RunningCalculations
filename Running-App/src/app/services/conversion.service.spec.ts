import { TestBed } from '@angular/core/testing';

import { ConversionService } from './conversion.service';
import { IDistance, DistanceUnit, Meter, Kilometer } from '../shared/models/distance.model';
import { Pace } from '../shared/models/pace.model';
import { TimeUnit } from '../shared/models/timeunit.model';
import { Timespan } from '../shared/models/timespan.model';

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
  it('should convert 1000 meters to 1 km ', () => {
    let newDistance = service.convertDistance(new Meter(1000), DistanceUnit.KM)
    let expectedNewDistance = new Kilometer(1);
    expect(newDistance.getUnit()).toEqual(expectedNewDistance.getUnit())
    expect(newDistance.getLength()).toEqual(expectedNewDistance.getLength())
  });

  it('should convert 432 meters to 0.432 km ', () => {
    let newDistance = service.convertDistance(new Meter(432), DistanceUnit.KM)
    let expectedNewDistance = new Kilometer(0.432);
    expect(newDistance.getUnit()).toEqual(expectedNewDistance.getUnit())
    expect(newDistance.getLength()).toEqual(expectedNewDistance.getLength()) 
  });

  it('should convert 3 km  to 3000 meters ', () => {
    let newDistance = service.convertDistance(new Kilometer(3), DistanceUnit.M)
    let expectedNewDistance = new Meter(3000);
    expect(newDistance.getUnit()).toEqual(expectedNewDistance.getUnit())
    expect(newDistance.getLength()).toEqual(expectedNewDistance.getLength())
  });

  it('should convert  1.234 km  to 1234 meters ', () => {
    let expectedNewDistance = new Meter(1234);
    let newDistance = service.convertDistance(new Kilometer(1.234), DistanceUnit.M)    
    expect(newDistance.getUnit()).toEqual(expectedNewDistance.getUnit())
    expect(newDistance.getLength()).toEqual(expectedNewDistance.getLength())
  });

  it('should return same distance when asking for same unit ', () => {
    let originalDistance = new Kilometer(322);
    let newDistance = service.convertDistance(originalDistance, DistanceUnit.KM)
    expect(newDistance.getUnit()).toEqual(originalDistance.getUnit())
    expect(newDistance.getLength()).toEqual(originalDistance.getLength())  
  });











  //Time conversions
  it("Convert a full day to seconds", () => {
    let fullDay = new Timespan(1,0,0,0);
    let allInSeconds = service.convertTimeStampToUnitNumber(fullDay, TimeUnit.Second);
    let expectedSeconds = 24 * 60 * 60;
    expect(allInSeconds).toEqual(expectedSeconds);
  });

  it("Convert a full day to minutes", () => {
    let fullDay = new Timespan(1,0,0,0);
    let allInMinutes = service.convertTimeStampToUnitNumber(fullDay, TimeUnit.Minute);
    let expected = 24 * 60;
    expect(allInMinutes).toEqual(expected);
  });

  it("Convert a full day to Hours", () => {
    let fullDay = new Timespan(1,0,0,0);
    let result = service.convertTimeStampToUnitNumber(fullDay, TimeUnit.Hour);
    let expected = 24;
    expect(result).toEqual(expected);
  });

  it("Convert a full day to Hours", () => {
    let fullDay = new Timespan(1,0,0,0);
    let result = service.convertTimeStampToUnitNumber(fullDay, TimeUnit.Day);
    let expected = 1;
    expect(result).toEqual(expected);
  });

  it("Convert 1.5 day to Hours", () => {
    let fullDay = new Timespan(1,12,0,0);
    let result = service.convertTimeStampToUnitNumber(fullDay, TimeUnit.Day);
    let expected = 1.5;
    expect(result).toEqual(expected);
  });


  it("Convert 2days-1 second to seconds", () => {
    let fullDay = new Timespan(1,23,59,59);
    let result = service.convertTimeStampToUnitNumber(fullDay, TimeUnit.Second);
    let expected = ((24 * 60 * 60) * 2) - 1;
    expect(result).toEqual(expected);
  });

  it("Convert 2days-1 minute to minute", () => {
    let fullDay = new Timespan(1,23,59,0);
    let result = service.convertTimeStampToUnitNumber(fullDay, TimeUnit.Minute);
    let expected = ((24 * 60 ) * 2) - 1;
    expect(result).toEqual(expected);
  });
});
