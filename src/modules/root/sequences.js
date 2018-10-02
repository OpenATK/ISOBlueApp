import { sequence } from 'cerebral';

import * as session from '../session/sequences';
import * as snapshots from '../snapshots/sequences';


export const init = sequence("init", [
  session.init,
  snapshots.createSnapshots,
]);

