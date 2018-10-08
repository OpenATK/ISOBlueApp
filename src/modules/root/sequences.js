import { sequence } from 'cerebral';

import * as snapshots from '../snapshots/sequences';


export const init = sequence("init", [
  snapshots.createSnapshots,
]);

