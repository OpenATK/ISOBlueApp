import { state, props, sequences } from "cerebral";
import { set, when, toggle, unset } from "cerebral/factories";
import _ from "lodash";
import * as oadatrees from "./oadatrees";

export const initialize = () => {};

export const setConnectionArgs = () => {
  return {
    domain: "https://cloudradio33.ecn.purdue.edu",
    token: "abc",
    cache: false,
  };
};

export const setDeviceListRequest = ({ get }) => {
  return {
    requests: [
      {
        path: "/bookmarks/isoblue",
        tree: oadatrees.deviceTree,
        watch: { signals: ["handleNewDevice"] },
      },
    ],
  };
};

export const setDayListRequest = ({ get }) => {
  const device = get(props`device`);

  return {
    requests: [
      {
        path: `/bookmarks/isoblue/device-index/${device}/location`,
        tree: oadatrees.dayTree,
        watch: { signals: ["handleDayUpdate"], payload: { device } },
      },
    ],
  };
};

export const setHourListRequest = ({ get }) => {
  const device = get(props`device`);
  const day = get(props`day`);

  return {
    requests: [
      {
        path: `/bookmarks/isoblue/device-index/${device}/location/day-index/${day}`,
        tree: oadatrees.hourTree,
        //watch: { signals: ["handleHourUpdate"], payload: { device } },
      },
    ],
  };
};

export const setLocationDataRequest = ({ get }) => {
  const device = get(props`device`);
  const day = get(props`day`);
  const hour = get(props`hour`);

  return {
    requests: [
      {
        path: `/bookmarks/isoblue/device-index/${device}/location/day-index/${day}/hour-index/${hour}`,
        tree: oadatrees.masterTree,
        watch: { signals: ["handleDeviceLocationUpdate"], payload: { device } },
      },
    ],
  };
};

export const getMostRecentDay = ({ get }) => {
  const device = get(props`device`);
  const connection_id = get(state`connection.connection_id`);
  if (!device || !connection_id) {
    throw new Error("Missing parameters");
  }

  const day_index = get(
    state`oada.${connection_id}.bookmarks.isoblue.device-index.${device}.location.day-index`,
  );

  // find the most recent day
  const date_list = Object.keys(day_index);
  if (date_list.length === 0) {
    return {};
  }
  const last_date = _.maxBy(date_list, function (o) {
    return new Date(o);
  });
  return { day: last_date };
};

export const getMostRecentHour = ({ get }) => {
  const device = get(props`device`);
  const connection_id = get(state`connection.connection_id`);
  const day = get(props`day`);
  if (!device || !connection_id || !day) {
    throw new Error("Missing parameters");
  }

  const hour_index = get(
    state`oada.${connection_id}.bookmarks.isoblue.device-index.${device}.location.day-index.${day}.hour-index`,
  );

  // find the most recent hour
  const hour_list = Object.keys(hour_index);
  if (hour_list.length === 0) {
    return {};
  }
  const last_hour = _.maxBy(Object.keys(hour_index || {}), function (o) {
    return o.toString();
  });
  return { hour: last_hour };
};

export const getMostRecentLocation = ({ get }) => {
  const device = get(props`device`);
  const connection_id = get(state`connection.connection_id`);
  const day = get(props`day`);
  const hour = get(props`hour`);
  if (!device || !connection_id || !day || !hour) {
    throw new Error("Missing parameters");
  }
  const hour_dataset = get(
    state`oada.${connection_id}.bookmarks.isoblue.device-index.${device}.location.day-index.${day}.hour-index.${hour}.data`,
  );

  const latest_data_point = Object.values(hour_dataset || {}).reduce(
    (latest, data_point) => {
      if (!data_point.time.value) {
        return latest;
      } else {
        return latest.time.value > data_point.time.value
          ? latest
          : {
              time: data_point.time.value,
              lat: data_point.location.lat,
              lng: data_point.location.lng,
            };
      }
    },
    { time: 0, lat: 0, lng: 0 },
  );

  return { latest_data_point };
};

export const updateDeviceListState = ({ get }) => {
  const connection_id = get(state`connection.connection_id`);
  const devices =
    get(state`oada.${connection_id}.bookmarks.isoblue.device-index`) || {};
  if (!connection_id) {
    throw new Error("Missing parameters");
  }

  let device_state = get(state`devices`);

  for (const device_name in devices) {
    if (!(device_name in device_state)) {
      device_state[device_name] = {
        sync: false,
        watchPath: null,
        location: { lat: null, lng: null },
      };
    }
  }

  return { devices: device_state };
};
