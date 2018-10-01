import { Module, sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { toggle, set } from 'cerebral/operators';
import * as signals from './sequences'

export default Module({
  state: {
    unitSelected: false,
    date: '2018-09-25',
  },
  signals,
});


