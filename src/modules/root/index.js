import { Module } from 'cerebral';

import session from '../session/';
import diagnostics from '../diagnostics/';
import map from '../map/';
import units from '../units/';
//import oadaModule from '@oada/cerebral-module'
//import oadaProvider from '@oada/cerebral-provider'

//import * as signals from './chains';

export default Module({
  modules: {
    session,
    diagnostics,
    map,
    units,
  },
  signals: {
  },
  providers: {
    //oada: oadaProvider
  }
});

