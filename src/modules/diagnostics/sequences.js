import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set, when } from 'cerebral/operators';
import _ from 'lodash';
import * as map from '../map/sequences';
import * as snapshots from '../snapshots/sequences';
 
export const setDefaultDate = sequence("setDefaultDate", [ 
  when(state`diagnostics.selectedUnit`),
  {
    true: [
      ({state, props}) => state.set('diagnostics.date', 
      _.max(Object.keys(state.get(`data.${state.get(`diagnostics.selectedUnit`)}`)))),
    ],
    false: [
      ({state, props}) => state.set('diagnostics.date', null), 
    ],
  }
]);

export const setDate =  sequence("setDate", [
  ({state, props}) => state.set(`diagnostics.date`, props.date),
  ({state, props}) => state.set('diagnostics.hour', _.max(Object.keys(state.get(`data.${state.get(`diagnostics.selectedUnit`)}.${state.get(`diagnostics.date`)}`)))),
]); 

export const setHour =  sequence("setHour", [
  set(state`diagnostics.hour`, props`hour`),
]); 

export const setDefaultHour = sequence("setDefaultHour", [ 
  when(state`diagnostics.selectedUnit`),
  {
    true: [
      ({state, props}) => state.set('diagnostics.hour', 
      _.max(Object.keys(state.get(`data.${state.get(`diagnostics.selectedUnit`)}.${state.get(`diagnostics.date`)}`)))),
    ],
    false: [
      ({state, props}) => state.set('diagnostics.hour', null), 
    ],
  }
]);


export const setMeasurement = sequence("setMeasurement", [
  ({state, props}) => state.set('diagnostics.measurement', props.measurement),
]);


export const selectUnit = sequence("selectUnit", [
  when(state`diagnostics.selectedUnit`),
  {
    true: [
      set(state`diagnostics.selectedUnit`, null),
      setDefaultDate,
      setDefaultHour,
    ],  
    false: [
      set(state`diagnostics.selectedUnit`, props`unit`),
      setDefaultDate,
      setDefaultHour,
      map.centerOnUnit,
    ],
  }
]);

export const toggleMode = sequence("toggleMode", [
  when(state`diagnostics.mode`, (value) => value === "map"),
  {
    true: [
      set(state`diagnostics.mode`, 'graph'),
    ],
    false: [
      set(state`diagnostics.mode`, 'map'),
    ],
  },
]);


