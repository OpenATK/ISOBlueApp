import { sequence } from "cerebral";
import { state, props } from "cerebral/tags";
import { set, when } from "cerebral/operators";
import _ from "lodash";
import * as map from "../map/sequences";
import * as snapshots from "../snapshots/sequences";
import * as data from "../data/sequences";

export const setDefaultDate = sequence("setDefaultDate", [
  when(state`diagnostics.selectedUnit`),
  {
    true: [
      ({ state, props }) =>
        state.set(
          "diagnostics.date",
          Object.keys(
            state.get(`data.${state.get(`diagnostics.selectedUnit`)}`),
          ).sort((a, b) => {
            return new Date(b) - new Date(a);
          })[0],
        ),
    ],
    false: [({ state, props }) => state.set("diagnostics.date", null)],
  },
]);

export const setDate = sequence("setDate", [
  ({ state, props }) => state.set(`diagnostics.date`, props.date),
  ({ state, props }) =>
    state.set(
      "diagnostics.hour",
      _.max(
        Object.keys(
          state.get(
            `data.${state.get(`diagnostics.selectedUnit`)}.${state.get(
              `diagnostics.date`,
            )}`,
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

export const setDefaultHour = sequence("setDefaultHour", [
  when(state`diagnostics.selectedUnit`),
  {
    true: [
      ({ state, props }) =>
        state.set(
          "diagnostics.hour",
          _.max(
            Object.keys(
              state.get(
                `data.${state.get(`diagnostics.selectedUnit`)}.${state.get(
                  `diagnostics.date`,
                )}`,
              ),
            ),
          ),
        ),
    ],
    false: [({ state, props }) => state.set("diagnostics.hour", null)],
  },
]);

export const setMeasurement = sequence("setMeasurement", [
  ({ state, props }) => state.set("diagnostics.measurement", props.measurement),
]);

export const selectUnit = sequence("selectUnit", [
  when(state`diagnostics.selectedUnit`),
  {
    true: [
      set(state`diagnostics.selectedUnit`, null),
      setDefaultDate,
      setDefaultHour,
      set(state`diagnostics.mode`, "map"),
      set(state`diagnostics.measurement`, "GPS"),
    ],
    false: [
      set(state`diagnostics.selectedUnit`, props`unit`),
      setDefaultDate,
      setDefaultHour,
      map.centerOnUnit,
    ],
  },
]);

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
