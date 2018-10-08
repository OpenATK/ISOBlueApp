import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { set } from 'cerebral/operators';
import _ from 'lodash';

export const createSnapshots = sequence("createSnapshots", [
    ({state, props}) => ({
      unitList: Object.keys(state.get(`data`))
    }),
    ({state, props}) => ({
      units: _.reduce(props.unitList, (acc, unit, unitkey) => {
     
        var lastDate =_.max(Object.keys(state.get(`data.${[unit]}`)));
      
        var lastTime = _.max(Object.keys(state.get(`data.${[unit]}`)[lastDate]));

        var lastGPS = _.max(Object.keys(state.get(`data.${[unit]}.${lastDate}.${lastTime}.gps`)));     
      
        var lastHeartbeat = _.max(Object.keys(
          state.get(`data.${[unit]}.${lastDate}.${lastTime}.heartbeats`)
        ));     

        var heartbeat = state.get(
          `data.${[unit]}.${lastDate}.${lastTime}.heartbeats.${lastHeartbeat}`
        );     

        var location = state.get(`data.${[unit]}.${lastDate}.${lastTime}.gps.${lastGPS}`);     
 
        var lastReport = Math.round(
          (Math.round((new Date()).getTime() / 1000 ) - _.max([lastHeartbeat, lastGPS])) / 60
        ); 
        
        var latency = (heartbeat.recTime - heartbeat.genTime);

        var health = null;
        if (lastReport < 2) {
          if (latency < 20) {
            health = "Healthy";
          } else {
            health = "Sick";
          }
        } else if (lastReport < 10) {
          health = "Sick";
        } else {
          health = "Down";
        }

        var connection = null
        if (health === "Healthy" || health === "Sick") {
          connection = _.findKey(heartbeat.interfaces, 'active');
        } else {
          connection = "NA";
          lastReport = "NA";
        }

        acc[unit] = {
          health,
          connection,
          location,
          lastReport,
        };
        return acc;
      }, {}),
    }),
    set(state`snapshots`, props`units`),
]);

/*
export const createSnapshots = sequence("createSnapshots", [
 /* when(state`data.${state`session.date`}`),
  {
    true:[
      ({state, props}) => ({
        unitList: Object.keys(state.get(`data.${state.get("session.date")}`))
      }),
      ({state, props}) => ({
        units: _.reduce(props.unitList, (acc, unit, unitkey) => {
          let health = "good";
          if (...) health="bad";

          acc[unitkey] = {
            health,
            lastReport: Math.round((Math.round((new Date()).getTime() / 1000 ) - Number(_.max([_.max(Object.keys(state.get(`data.${state.get('session.date')}`)[key].gps)), _.max(Object.keys(state.get(`data.${state.get('session.date')}`)[key].heartbeats))]))) / 60),
            connected: _.findKey(state.get(`data.${state.get("session.date")}`)[key].heartbeats[_.max(Object.keys(state.get(`data.${state.get('session.date')}`)[key].heartbeats))].interfaces, 'active'),
            location: {
              lat: state.get(`data.${state.get("session.date")}`)[key].gps[_.max(Object.keys(state.get(`data.${state.get('session.date')}`)[key].gps))][0],
              lng: state.get(`data.${state.get("session.date")}`)[key].gps[_.max(Object.keys(state.get(`data.${state.get('session.date')}`)[key].gps))][1],
            },
          };
          return acc;
        }, {}),
      }),
      set(state`snapshots`, props`units`),
    ],
    false: [set(state`snapshots`, {})],
  },
]);*/

