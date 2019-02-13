import { sequence } from "cerebral";
import { state, props } from "cerebral/tags";
import { set } from "cerebral/operators";
import _ from "lodash";

export const createSnapshots = sequence("createSnapshots", [
  ({ state, props }) => ({
    units: _.reduce(
      Object.keys(
        state.get(
          `oada.${props.connection_id}.bookmarks.isoblue.device-index`,
        ) || {},
      ),
      (acc, unit, unitkey) => {
        // iterate over all the ISOBlue units
        var unitLocationData = state.get(
          `oada.${
            props.connection_id
          }.bookmarks.isoblue.device-index.${unit}.location.day-index`,
        );
        //var health, location, connection, lastReport;
        const lastDate = _.maxBy(Object.keys(unitLocationData || {}), function(
          o,
        ) {
          return new Date(o);
        });

        if (!lastDate) return acc;
        if (!unitLocationData[lastDate].hasOwnProperty("hour-index"))
          return acc;

        const lastHour = _.max(
          Object.keys(unitLocationData[lastDate]["hour-index"] || {}),
        );

        if (!lastHour) return acc;
        var lastGPS =
          _.max(
            Object.keys(
              unitLocationData[lastDate]["hour-index"][lastHour]["sec-index"] ||
                {},
            ),
          ) || null;

        // get messages
        const msg_gps = lastGPS
          ? unitLocationData[lastDate]["hour-index"][lastHour]["sec-index"][
              lastGPS
            ]
          : null;
        // const msg_hb = lastHeartbeat
        //   ? unitData[lastDate]["hour-index"][lastTime]["heartbeats"][
        //       lastHeartbeat
        //     ]
        //   : null;
        if (msg_gps) {
          var lastLocationReport = Math.round(
            (Math.round(new Date().getTime() / 1000) - lastGPS) / 60,
          );

          var latency = null;
          // if (
          //   msg_hb.hasOwnProperty("recTime") &&
          //   msg_hb.hasOwnProperty("genTime")
          // ) {
          //   latency = msg_hb.recTime - msg_hb.genTime;
          // }

          var health = null;
          if (lastLocationReport < 2) {
            if (latency < 20) {
              health = "Healthy";
            } else {
              health = "Sick";
            }
          } else if (lastLocationReport < 10) {
            health = "Sick";
          } else {
            health = "Down";
          }

          var location = null;
          if (msg_gps.hasOwnProperty("lat") && msg_gps.hasOwnProperty("lng")) {
            location = msg_gps;
          }

          var connection = null;

          acc[unit] = {
            health,
            connection,
            location,
            lastLocationReport,
            lastHeartbeatTime: lastLocationReport,
          };
          state.set(`health.${unit}`, health);
        } else {
          acc[unit] = {
            health: "Down",
            connection: null,
            location: null,
            lastReport: "NA",
            lastHeartbeatTime: 60,
          };
          state.set(`health.${unit}`, "Down");
        }
        return acc;
      },
      {},
    ),
  }),
  set(state`snapshots`, props`units`),
]);
