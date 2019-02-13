import { sequence } from "cerebral";
import { state, props } from "cerebral/tags";
import { set } from "cerebral/operators";
import _ from "lodash";

export const createSnapshots = sequence("createSnapshots", [
  ({ state, props }) => ({
    unitList: _.without(Object.keys(state.get(`data`)), "connection_id"),
  }),
  ({ state, props }) => ({
    units: _.reduce(
      props.unitList,
      (acc, unit, unitkey) => {
        var unitData = state.get(`data.${[unit]}`);
        //var health, location, connection, lastReport;
        var lastDate = _.max(Object.keys(unitData || {}));
        var lastTime = _.max(Object.keys(unitData[lastDate] || {}));
        var lastGPS = _.max(
          Object.keys(unitData[lastDate][lastTime].gps || {}),
        );
        var lastHeartbeat = _.max(
          Object.keys(unitData[lastDate][lastTime].heartbeats || {}),
        );

        if (lastGPS && lastHeartbeat) {
          var heartbeat =
            unitData[lastDate][lastTime].heartbeats[lastHeartbeat];
          var location = unitData[lastDate][lastTime].gps[lastGPS];
          var lastReport = Math.round(
            (Math.round(new Date().getTime() / 1000) -
              _.max([lastHeartbeat, lastGPS])) /
              60,
          );
          var latency = heartbeat
            ? heartbeat.recTime - heartbeat.genTime
            : "NA";

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

          var connection = null;
          if (health === "Healthy" || health === "Sick") {
            connection = _.findKey(heartbeat.interfaces, "active");
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
        } else {
          acc[unit] = {
            health: "Down",
            connection: "NA",
            location: "NA",
            lastReport: "NA",
          };
        }
        return acc;
      },
      {},
    ),
  }),
  set(state`snapshots`, props`units`),
]);
