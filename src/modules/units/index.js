import { Module } from 'cerebral';
//import { state, props } from 'cerebral/tags';
//import { set, debounce } from 'cerebral/operators';

import stateTree from './stateTree.js'

export default Module({

  state: stateTree,

  signals: {
  
  },
});
