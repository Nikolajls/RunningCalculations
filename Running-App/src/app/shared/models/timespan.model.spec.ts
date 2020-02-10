import { Timespan } from './timespan.model';

describe('Timespan', () => {
  it('should create an instance', () => {
    expect(new Timespan(0,0,0,0)).toBeTruthy();
  });
});
