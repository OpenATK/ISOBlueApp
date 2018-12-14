import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set, debounce } from 'cerebral/operators';
import _ from 'lodash';


export const storeUserLocation = sequence("storeUserLocation", [
  ({state, props}) => state.set('map.userLocation', { lat: props.lat, lng: props.lng }),
  set(state`map.userLocationAvailable`, true),
]);

export const centerOnUser = sequence("centerOnUser", [
  set(state`map.targetCenter`, {lat: 40.428641, lng: -86.913783}),
  debounce(1),
  {
    continue: [set(state`map.targetCenter`, state`map.userLocation`)],
    discard: [],
  }
]);

export const centerOnUnit = sequence("centerOnUnit", [
  () => console.log('centerOnUnit'),
  set(state`map.targetCenter`, {lat: 40.428641, lng: -86.913783}),
  debounce(1),
  {
    continue: [
      ({state, props}) => {
        let unit = state.get(`diagnostics.selectedUnit`);
        let date = state.get(`diagnostics.date`);
        let hour = state.get(`diagnostics.hour`);
        if (unit && date && hour) {
          console.log('centerOnUnit 2');
          console.log(unit, date, hour);
          let last = _.max(Object.keys(state.get(`data.${unit}.${date}.${hour}.gps`) || {}));
          if (last) {
            console.log('centerOnUnit 3');
            let unitLocation = state.get(`data.${unit}.${date}.${hour}.gps.${last}`);
            if (unitLocation.lat && unitLocation.lng) {
              state.set(`map.targetCenter`, unitLocation);
            };
          };
        };
      },
      //set(state`map.targetCenter`, state`snapshots.${state`diagnostics.selectedUnit`}.location`),
    ],
    discard: [],
  }
]);
