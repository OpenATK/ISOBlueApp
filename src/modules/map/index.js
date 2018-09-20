import { Module, sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set, debounce } from 'cerebral/operators';

export default Module({

  state: {
    targetCenter: { lat: 40.428641, lng: -86.913783 },
    userLocation: { lat: 40.428641, lng: -86.913783 },
    userLocationAvailable: false,
    cutOffTime: 1,
    displayCutOffTime: "1 hour",
  },

  signals: {

    storeUserLocation: sequence("storeUserLocation", [
      ({state, props}) => state.set('map.userLocation', { lat: props.lat, lng: props.lng }),
      set(state`map.userLocationAvailable`, true),
    ]),

    centerOnUser: sequence("centerOnUser", [
      set(state`map.targetCenter`, {lat: 40.428641, lng: -86.913783}),
      debounce(1),
      {
        continue: [set(state`map.targetCenter`, state`map.userLocation`)],
        discard: [],
      }
    ]),

    setCutOffTime: sequence("setCutOffTime", [
      ({state, props}) => state.set('map.cutOffTime', props.cutOffTime),
      ({state, props}) => state.set('map.displayCutOffTime', props.displayCutOffTime),
    ]),

  },
});
