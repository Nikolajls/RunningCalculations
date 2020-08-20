import {Timespan} from './timespan.model';
import {IDistance} from './distance.model';
import {Pace} from './pace.model';

export class Run {
    constructor( ){

    }
    public distance: IDistance;
    public pace: Pace;
    public time: Timespan;
}
