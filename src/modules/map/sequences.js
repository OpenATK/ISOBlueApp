import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set, debounce } from 'cerebral/operators';


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
  set(state`map.targetCenter`, {lat: 40.428641, lng: -86.913783}),
  debounce(1),
  {
    continue: [set(state`map.targetCenter`, state`snapshots.${state`diagnostics.selectedUnit`}.location`)],
    discard: [],
  }
]);
