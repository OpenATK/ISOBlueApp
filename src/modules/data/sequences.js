import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set } from 'cerebral/operators';
import Promise from 'bluebird';
import _ from 'lodash';
import * as oada from '@oada/cerebral-module/sequences';

var masterTree = {
  bookmarks: {
    _type: 'applications/vnd.oada.bookmarks.1+json',
    _rev: "0-0",
    isoblue: {
      _type: 'applications/vnd.oada.isoblue.1+json',
      _rev: "0-0",
      "device-index": {
        "*": {
          _type: 'applications/vnd.oada.isoblue.device.1+json',
          _rev: "0-0",
          "day-index": {
            "*": {
              _type: 'applications/vnd.oada.isoblue.day.1+json',
              _rev: "0-0",
						  "hour-index":{
						    "*": {
						      _type: 'applications/vnd.oada.isoblue.hour.1+json',
						      _rev: "0-0",
                },
              },
            },
          },  
        },
      },
    },
  },
}

var dayTree = {
  bookmarks: {
    _type: 'applications/vnd.oada.bookmarks.1+json',
    _rev: "0-0",
    isoblue: {
      _type: 'applications/vnd.oada.isoblue.1+json',
      _rev: "0-0",
      "device-index": {
        "*": {
          _type: 'applications/vnd.oada.isoblue.device.1+json',
          _rev: "0-0",
          "day-index": {
            "*": {
              _type: 'applications/vnd.oada.isoblue.day.1+json',
              _rev: "0-0",
            },
          },  
        },
      },
    },
  },
}


export const mapIndex = sequence('data.mapOadaToRecords', [
  ({state, props}) => {
   let id = state.get('data.connection_id');
   let data = state.get(`oada.${id}.bookmarks.isoblue`);
   return Promise.map(Object.keys(data['device-index'] || {}), (device) => {
      if (device.charAt(0) !== '_') state.set(`data.${device}`, {});
      return Promise.map(Object.keys(data['device-index'][device]['day-index'] || {}), (date) => {
        if (date.charAt(0) !== '_') state.set(`data.${device}.${date}`, {});
        return Promise.map(Object.keys(data['device-index'][device]['day-index'][date]['hour-index'] || {}), (hour) => {
          if (hour.charAt(0) !== '_') state.set(`data.${device}.${date}.${hour}`, {});
        });
      });
      return
    }).then(() => {return});
  }
]);

export const handleWatchUpdate = sequence('data.handleWatchUpdate', [
  () => (console.log('data.handleWatchUpdate')),
]);

export const initialFetch = sequence('data.fetch', [
  ({state, props}) => ({
    connection_id: state.get('data.connection_id'),
    path: '/bookmarks/isoblue',
    tree: dayTree,
    watch: {signals: ['data.handleWatchUpdate']},
  }),
  oada.get,
  mapIndex,
  ({state, props}) => ({
    tree: masterTree,
  }),
  function getLastHour({state, props}) {
    return Promise.map(_.without(Object.keys(state.get(`data`)), 'connection_id'), (device) => {
      let lastDate = _.max(Object.keys(state.get(`data.${device}`)));
      let lastHour = _.max(Object.keys(state.get(`data.${device}.${lastDate}`)));
			return {
				path:`/bookmarks/isoblue/device-index/${device}/day-index/${lastDate}/hour-index/${lastHour}`
			}
    }).then((requests) => {return {requests:requests}});    
  },
  oada.get,
  function mapLastHour({state, props}) {
    return Promise.map(_.without(Object.keys(state.get(`data`)), 'connection_id'), (device) => {
      let lastDate = _.max(Object.keys(state.get(`data.${device}`)));
      let lastHour = _.max(Object.keys(state.get(`data.${device}.${lastDate}`)));
      let id = state.get('data.connection_id');
      let hourData = state.get(`oada.${id}.bookmarks.isoblue.device-index.${device}.day-index.${lastDate}.hour-index.${lastHour}`);
      let strippedData = _.pick(hourData, ['gps', 'heartbeats']);
      state.set(`data.${device}.${lastDate}.${lastHour}`, strippedData);
      return
    }).then(() => {return});  
  }, 
]);

export const init = sequence('data.init', [
	oada.connect,
  set(state`data.connection_id`, props`connection_id`),
  initialFetch,
]);

export const getHour = sequence('data.getHour', [
  ({state, props}) => ({
    connection_id: state.get('data.connection_id'),
    path: `/bookmarks/isoblue/device-index/${state.get(`diagnostics.selectedUnit`)}/day-index/${state.get(`diagnostics.date`)}/hour-index/${state.get(`diagnostics.hour`)}`,
    tree: masterTree,
    watch: {signals: ['data.handleWatchUpdate']},
  }),
  oada.get,
  ({state, props}) => {
    let device = state.get(`diagnostics.selectedUnit`);
    let date = state.get(`diagnostics.date`);
    let hour = state.get(`diagnostics.hour`);
    let id = state.get('data.connection_id');
    let hourData = state.get(`oada.${id}.bookmarks.isoblue.device-index.${device}.day-index.${date}.hour-index.${hour}`);
    let strippedData = _.pick(hourData, ['gps', 'heartbeats']);
    state.set(`data.${device}.${date}.${hour}`, strippedData);
  },
]);

