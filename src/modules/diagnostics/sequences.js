import { sequence } from "cerebral";
import { state, props } from "cerebral/tags";
import { set, when } from "cerebral/operators";
import _ from "lodash";
import * as map from "../map/sequences";
import * as data from "../data/sequences";

export const setDate = sequence("setDate", [
  set(state`diagnostics.date`, props`date`),
  ({ state, props }) =>
    state.set(
      "diagnostics.hour",
      _.max(
        Object.keys(
          state.get(
            `oada.${state.get(
              "data.connection_id",
            )}.bookmarks.isoblue.device-index.${state.get(
              "diagnostics.selectedUnit",
            )}.location.day-index.${state.get("diagnostics.date")}.hour-index`,
          ),
        ),
      ),
    ),
  data.getHour,
  map.centerOnUnit,
]);

export const setHour = sequence("setHour", [
  set(state`diagnostics.hour`, props`hour`),
  data.getHour,
  map.centerOnUnit,
]);

export const setMeasurement = sequence("setMeasurement", [
  ({ state, props }) => state.set("diagnostics.measurement", props.measurement),
]);

/* Set the selected unit, default date, and hour */
export const selectUnit = sequence("selectUnit", [
  ({ state, props }) => ({ connection_id: state.get("data.connection_id") }),
  set(state`diagnostics.selectedUnit`, props`unit`),

  // set default date and hour
  ({ state, props }) => {
    const date = Object.keys(
      state.get(
        `oada.${props.connection_id}.bookmarks.isoblue.device-index.${
          props.unit
        }.location.day-index`,
      ),
    ).sort((a, b) => {
      return new Date(b) - new Date(a);
    })[0];

    const hour = _.max(
      Object.keys(
        state.get(
          `oada.${props.connection_id}.bookmarks.isoblue.device-index.${
            props.unit
          }.location.day-index.${date}.hour-index`,
        ),
      ),
    );

    state.set("diagnostics.date", date);
    state.set("diagnostics.hour", hour);
  },

  // center the map
  map.centerOnUnit,
]);

export const unselectUnit = sequence("unselectUnit", [
  set(state`diagnostics.selectedUnit`, null),
  set(state`diagnostics.date`, null),
  set(state`diagnostics.hour`, null),
]);

/* Toggle map view and graph view */
export const toggleMode = sequence("toggleMode", [
  when(state`diagnostics.mode`, value => value === "map"),
  {
    true: [
      set(state`diagnostics.mode`, "graph"),
      set(state`diagnostics.measurement`, "Latency"),
    ],
    false: [
      set(state`diagnostics.mode`, "map"),
      set(state`diagnostics.measurement`, "GPS"),
    ],
  },
]);
