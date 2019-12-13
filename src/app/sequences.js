import { state, props } from "cerebral";
import { set, when, toggle, unset } from "cerebral/factories";
import oada from "@oada/cerebral-module/sequences";
import * as actions from "./actions";
import * as oadatrees from "./oadatrees";

export const initialize = actions.initialize;

export var connect = [
  actions.setConnectionArgs,
  oada.connect,
  set(state`connection.connection_id`, props`connection_id`),

  actions.setDeviceListRequest,
  oada.get,
  actions.updateDeviceListState,
  set(state`devices`, props`devices`),
];

export const handleNewDevice = [
  actions.updateDeviceListState,
  set(state`devices`, props`devices`),
];

export const handleDeviceLocationUpdate = [
  actions.getMostRecentDay,
  actions.getMostRecentHour,
  actions.getMostRecentLocation,
  set(
    state`devices.${props`device`}.location.lng`,
    props`latest_data_point.lng`,
  ),
  set(
    state`devices.${props`device`}.location.lat`,
    props`latest_data_point.lat`,
  ),
];

export const handleDayUpdate = [
  set(props`connection_id`, state`connection.connection_id`),
  actions.getMostRecentDay,

  actions.setHourListRequest,
  oada.get,
  actions.getMostRecentHour,

  actions.setLocationDataRequest,
  oada.get,
  actions.getMostRecentLocation,
  set(
    state`devices.${props`device`}.location.lng`,
    props`latest_data_point.lng`,
  ),
  set(
    state`devices.${props`device`}.location.lat`,
    props`latest_data_point.lat`,
  ),
];

export const toggleDrawer = toggle(state`components.drawer`);

export const selectDevice = [
  set(props`connection_id`, state`connection.connection_id`),

  actions.setDayListRequest,
  oada.get,
  actions.getMostRecentDay,

  actions.setHourListRequest,
  oada.get,
  actions.getMostRecentHour,

  actions.setLocationDataRequest,
  oada.get,
  actions.getMostRecentLocation,
  set(
    state`devices.${props`device`}.location.lng`,
    props`latest_data_point.lng`,
  ),
  set(
    state`devices.${props`device`}.location.lat`,
    props`latest_data_point.lat`,
  ),
  set(state`devices.${props`device`}.sync`, true),
  set(state`mapCenter.lat`, props`latest_data_point.lat`),
  set(state`mapCenter.lng`, props`latest_data_point.lng`),
  set(state`selectedDevice.device`, props`device`),
  set(state`selectedDevice.day`, props`day`),
  set(state`selectedDevice.hour`, props`hour`),
];

export const unselectDevice = [
  set(state`selectedDevice.device`, null),
  set(state`selectedDevice.day`, null),
  set(state`selectedDevice.hour`, null),
];

export const selectDay = [
  set(props`connection_id`, state`connection.connection_id`),
  set(props`device`, state`selectedDevice.device`),
  set(state`selectedDevice.day`, props`day`),
  actions.setHourListRequest,
  oada.get,
];
export const selectHour = [
  set(props`connection_id`, state`connection.connection_id`),
  set(props`device`, state`selectedDevice.device`),
  set(props`day`, state`selectedDevice.day`),
  set(state`selectedDevice.hour`, props`hour`),
  actions.setLocationDataRequest,
  oada.get,
];

export const toggleDeviceSync = [
  when(state`devices.${props`device`}.sync`),
  {
    true: [set(state`devices.${props`device`}.sync`, false)],
    false: [
      set(props`connection_id`, state`connection.connection_id`),

      actions.setDayListRequest,
      oada.get,
      actions.getMostRecentDay,

      actions.setHourListRequest,
      oada.get,
      actions.getMostRecentHour,

      actions.setLocationDataRequest,
      oada.get,
      actions.getMostRecentLocation,
      set(
        state`devices.${props`device`}.location.lng`,
        props`latest_data_point.lng`,
      ),
      set(
        state`devices.${props`device`}.location.lat`,
        props`latest_data_point.lat`,
      ),
      set(state`devices.${props`device`}.sync`, true),
    ],
  },
];
