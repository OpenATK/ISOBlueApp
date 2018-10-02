import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set, when } from 'cerebral/operators';

 
export const setTimePeriod = sequence("setTimePeriod", [
  ({state, props}) => state.set('diagnostics.timePeriod', props.timePeriod),
  ({state, props}) => state.set('diagnostics.displayTimePeriod', props.displayTimePeriod),
]);

export const setMeasurement = sequence("setMeasurement", [
  ({state, props}) => state.set('diagnostics.measurement', props.measurement),
]);


export const selectUnit = sequence("selectUnit", [
  when(state`diagnostics.selectedUnit`),
  {
    true: [set(state`diagnostics.selectedUnit`, null)],  
    false: [set(state`diagnostics.selectedUnit`, props`unit`)],
  }
]);


