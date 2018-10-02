import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set, when } from 'cerebral/operators';
import _ from 'lodash';
import * as snapshots from '../snapshots/sequences';


export const setDate = sequence("setDate", [
  set(state`session.date`, props`date`),
  snapshots.createSnapshots,
]);

export const init = sequence("sessionInit", [
  when(state`data`, (value) => Object.keys(value).length === 0),
  {
    true: [
      ({state}) => ({
        date: new Date().toISOString().slice(0,10),
      }),
    ],
    false: [
      ({state}) => ({
        date: _.max(Object.keys(state.get("data"))),
      }),
    ],
  },
  set(state`session.date`, props`date`),
]);


