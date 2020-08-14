import { Distance, DistanceUnit } from './distance.model';

describe('Distance', () => {
  it('should create an instance', () => {
    expect(new Distance(12, DistanceUnit.KM)).toBeTruthy();
  });


  it('should not create an instance when distance less than or requal to 0.0', () => {
    expect(() => new Distance(0, DistanceUnit.KM)).toThrowError(Error);
  });
});
