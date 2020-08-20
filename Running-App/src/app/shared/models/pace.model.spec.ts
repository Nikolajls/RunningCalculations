import { Pace } from './pace.model';
import { TimeUnit } from './timeunit.model';
import { DistanceUnit, Kilometer } from './distance.model';

describe('Pace', () => {
  it('should create an instance', () => {
    expect(new Pace(new Kilometer(12), TimeUnit.Hour)).toBeTruthy();
  });
});
