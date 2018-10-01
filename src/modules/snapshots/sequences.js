import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set, when} from 'cerebral/operators';
//import _ from 'lodash';


export const createSnapshots = sequence("createSnapshots", [
  when(state`data.${state`session.date`}`),
  {
    true:[
      ({state, props}) => ({
        unitList: Object.keys(state.get(`data.${state.get("session.date")}`))
      }),
      ({props}) => ({
        units: props.unitList.reduce((o, key) => ({ ...o, [key]: {
          health: "Healthy", 
          lastReport: 1, 
          connected: "4G", 
          location: {
            lat: 40.42,
            lng: -86.91,
          },
        }}), {})
      }),
      set(state`snapshots`, props`units`),
    ],
    false: [set(state`snapshots`, {})],
  },
]);
