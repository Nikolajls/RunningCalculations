import { Pace } from './pace.model';
import { TimeUnit } from './timeunit.model';
import { DistanceUnit } from './distance.model';

describe('Pace', () => {
  it('should create an instance', () => {
    expect(new Pace(12, TimeUnit.Minute, DistanceUnit.KM)).toBeTruthy();
  });
});
