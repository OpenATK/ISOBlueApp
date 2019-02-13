import { sequence } from "cerebral";
import { state, props } from "cerebral/tags";
import { set } from "cerebral/operators";
import _ from "lodash";
import oada from "@oada/cerebral-module/sequences";

var masterTree = {
  bookmarks: {
    _type: "application/vnd.oada.bookmarks.1+json",
    _rev: "0-0",
    isoblue: {
      _type: "application/vnd.oada.isoblue.1+json",
      _rev: "0-0",
      "device-index": {
        "*": {
          _type: "application/vnd.oada.isoblue.device.1+json",
          _rev: "0-0",
          "*": {
            _type: "application/vnd.oada.isoblue.dataset.1+json",
            _rev: "0-0",
            "day-index": {
              "*": {
                _type: "application/vnd.oada.isoblue.day.1+json",
                _rev: "0-0",
                "hour-index": {
                  "*": {
                    _type: "application/vnd.oada.isoblue.hour.1+json",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

var dayTree = {
  bookmarks: {
    _type: "applications/vnd.oada.bookmarks.1+json",
    _rev: "0-0",
    isoblue: {
      _type: "applications/vnd.oada.isoblue.1+json",
      _rev: "0-0",
      "device-index": {
        "*": {
          _type: "applications/vnd.oada.isoblue.device.1+json",
          _rev: "0-0",
          "*": {
            _type: "application/vnd.oada.isoblue.dataset.1+json",
            _rev: "0-0",
            "day-index": {
              "*": {
                _type: "applications/vnd.oada.isoblue.day.1+json",
                _rev: "0-0",
              },
            },
          },
        },
      },
    },
  },
};

var deviceTree = {
  bookmarks: {
    _type: "applications/vnd.oada.bookmarks.1+json",
    _rev: "0-0",
    isoblue: {
      _type: "applications/vnd.oada.isoblue.1+json",
      _rev: "0-0",
      "device-index": {
        "*": {
          _type: "applications/vnd.oada.isoblue.device.1+json",
          _rev: "0-0",
          "*": {
            _type: "application/vnd.oada.isoblue.dataset.1+json",
            _rev: "0-0",
          },
        },
      },
    },
  },
};

/* Set requests */
function setRequestLastHour({ state, props }) {
  const devices = Object.keys(
    state.get(`oada.${props.connection_id}.bookmarks.isoblue.device-index`) ||
      {},
  );

  var requests = []; // OADA requests

  devices.forEach(device_name => {
    var device_data =
      state.get(
        `oada.${
          props.connection_id
        }.bookmarks.isoblue.device-index.${device_name}.location.day-index`,
      ) || {};

    // find the most recent day
    const date_list = Object.keys(device_data);
    if (date_list.length === 0) {
      return;
    }
    const last_date = _.maxBy(date_list, function(o) {
      return new Date(o);
    });

    //find the most recent hour
    const last_hour = _.max(
      Object.keys(device_data[last_date]["hour-index"] || {}),
    );

    // add request
    requests.push({
      path: `/bookmarks/isoblue/device-index/${device_name}/location/day-index/${last_date}/hour-index/${last_hour}`,
      watch: { signals: ["snapshots.createSnapshots"] },
      tree: masterTree,
    });
  });

  return { requests };
}

/* Called when the device list was modified */
export const handleDeviceUpdate = sequence("data.handleDeviceUpdate", [
  set(state`data.ready`, false),
  setRequestLastHour,
  oada.get,
  set(state`data.ready`, true),
]);

// Get devices and watch for changes
export const getDevices = sequence("data.getDevices", [
  // get devices
  ({ state, props }) => ({
    requests: [
      {
        path: "/bookmarks/isoblue",
        tree: dayTree,
        watch: { signals: ["data.handleDeviceUpdate"] },
      },
    ],
  }),
  oada.get,
]);

/* Initial sequence. Only called at startup. */
export const init = sequence("data.init", [
  set(state`data.ready`, false),
  set(state`health`, {}),
  // connect to server
  set(state`data.connection_id`, props`connection_id`),

  // get most recent data
  getDevices,
  setRequestLastHour,
  oada.get,
  set(state`data.ready`, true),
]);

/* Set request to OADA server based on currently selected device, date, and hour */
export const getHour = sequence("data.getHour", [
  ({ state, props }) => ({
    requests: [
      {
        connection_id: state.get("data.connection_id"),
        path: `/bookmarks/isoblue/device-index/${state.get(
          `diagnostics.selectedUnit`,
        )}/location/day-index/${state.get(
          `diagnostics.date`,
        )}/hour-index/${state.get(`diagnostics.hour`)}`,
        tree: masterTree,
      },
    ],
  }),
  oada.get,
]);
