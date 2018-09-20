import { Module, sequence } from 'cerebral';
import { set } from 'cerebral/operators';

export default Module({
  state: {
    timePeriod: '60',
    displayTimePeriod: '1 hour',
    measurement: 'LTE Strength',
  },
  signals: {
 
    setTimePeriod: sequence("setTimePeriod", [
      ({state, props}) => state.set('diagnostics.timePeriod', props.timePeriod),
      ({state, props}) => state.set('diagnostics.displayTimePeriod', props.displayTimePeriod),
    ]),


    setMeasurement: sequence("setMeasurement", [
      ({state, props}) => state.set('diagnostics.measurement', props.measurement),
    ]),

  },
});
