import { Module, sequence } from 'cerebral';

import session from '../session/';
import diagnostics from '../diagnostics/';
import map from '../map/';
import data from '../data/';
import snapshots from '../snapshots/';
//import oadaModule from '@oada/cerebral-module'
//import oadaProvider from '@oada/cerebral-provider'
import * as signals from './sequences';

export default Module({
  modules: {
    session,
    diagnostics,
    map,
    data,
    snapshots,
  },
  signals,
  providers: {
    //oada: oadaProvider
  }
});

