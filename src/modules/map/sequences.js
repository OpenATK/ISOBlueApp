import { sequence } from "cerebral";
import { state } from "cerebral/tags";
import { set, debounce } from "cerebral/operators";
import _ from "lodash";

export const storeUserLocation = sequence("storeUserLocation", [
  ({ state, props }) =>
    state.set("map.userLocation", { lat: props.lat, lng: props.lng }),
  set(state`map.userLocationAvailable`, true),
]);

export const centerOnUser = sequence("centerOnUser", [
  set(state`map.targetCenter`, { lat: 40.428641, lng: -86.913783 }),
  debounce(1),
  {
    continue: [set(state`map.targetCenter`, state`map.userLocation`)],
    discard: [],
  },
]);

export const centerOnUnit = sequence("centerOnUnit", [
  set(state`map.targetCenter`, { lat: 40.428641, lng: -86.913783 }),
  debounce(1),
  {
    continue: [
      ({ state, props }) => {
        const conn_id = state.get("data.connection_id");
        let unit = state.get(`diagnostics.selectedUnit`);
        let date = state.get(`diagnostics.date`);
        let hour = state.get(`diagnostics.hour`);
        if (unit && date && hour) {
          const gps_list =
            state.get(
              `oada.${conn_id}.bookmarks.isoblue.device-index.${unit}.day-index.${date}.hour-index.${hour}.gps`,
            ) || {};
          const last = _.max(Object.keys(gps_list));
          if (last) {
            const unitLocation = gps_list[last];
            if (unitLocation.lat && unitLocation.lng) {
              state.set(`map.targetCenter`, unitLocation);
            }
          }
        }
      },
      //set(state`map.targetCenter`, state`snapshots.${state`diagnostics.selectedUnit`}.location`),
    ],
    discard: [],
  },
]);
