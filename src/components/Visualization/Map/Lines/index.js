import React from "react";
import _ from "lodash";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import uuid from "uuid";
//import Leaflet from 'leaflet';
import { Polyline } from "react-leaflet";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Lines extends React.Component {
  render() {
    // get connection id
    const conn_id = this.props.connection_id;

    // do not render lines if data is not ready
    if (!this.props.ready) return null;

    var dataLines = [];

    if (!this.props.oada[conn_id].bookmarks.hasOwnProperty("isoblue")) {
      return null;
    }

    const devices =
      this.props.oada[conn_id].bookmarks.isoblue["device-index"] || {};

    // Unit is selected
    if (this.props.selectedUnit && this.props.date && this.props.hour) {
      // ensure that the target resource actually exists
      var gps_data = null;
      try {
        gps_data =
          devices[this.props.selectedUnit]["location"]["day-index"][
            this.props.date
          ]["hour-index"][this.props.hour]["sec-index"];
      } catch (e) {
        console.error("hmm");
        return null;
      }

      // make a line
      var points = [];
      _.forEach(gps_data, instance => {
        if (
          instance.hasOwnProperty("lat") &&
          instance.hasOwnProperty("lng") &&
          instance.lat &&
          instance.lng
        ) {
          points.push([instance.lat, instance.lng]);
        }
      });

      // add line
      dataLines.push(points);
    }

    // None of the units is selected
    else {
      _.forEach(devices, (unit_resource, unit) => {
        // get the most recent date
        if (!unit_resource.hasOwnProperty("location")) return;
        if (!unit_resource.location.hasOwnProperty("day-index")) return;
        const date_list = Object.keys(unit_resource["location"]["day-index"]);
        if (date_list.length === 0) return;
        const last_date = _.maxBy(date_list, function(o) {
          return new Date(o);
        });

        // get hours
        if (
          !unit_resource["location"]["day-index"][last_date].hasOwnProperty(
            "hour-index",
          )
        )
          return;
        const hour_list = Object.keys(
          unit_resource["location"]["day-index"][last_date]["hour-index"],
        );

        const current_hour = _.max(hour_list);
        const last_hour = _.max(
          _.remove(hour_list, n => {
            return n !== current_hour;
          }),
        );
        var current_time_sec = Math.round(new Date().getTime() / 1000);
        var positions = [];

        if (
          last_hour !== undefined &&
          unit_resource["location"]["day-index"][last_date]["hour-index"][
            last_hour
          ].hasOwnProperty("sec-index")
        ) {
          const prev_gps_data =
            unit_resource["location"]["day-index"][last_date]["hour-index"][
              last_hour
            ]["sec-index"];
          var prev_gps_ts = Object.keys(prev_gps_data || {});
          prev_gps_ts.forEach(o => {
            if (
              current_time_sec - o <= 15 * 60 &&
              prev_gps_data[o].hasOwnProperty("lat") &&
              prev_gps_data[o].hasOwnProperty("lng") &&
              prev_gps_data[o].lat &&
              prev_gps_data[o].lng
            ) {
              positions.push([prev_gps_data[o].lat, prev_gps_data[o].lng]);
            }
          });
        }

        if (
          unit_resource["location"]["day-index"][last_date]["hour-index"][
            current_hour
          ].hasOwnProperty("sec-index")
        ) {
          const current_gps_data =
            unit_resource["location"]["day-index"][last_date]["hour-index"][
              current_hour
            ]["sec-index"];
          var current_gps_ts = Object.keys(current_gps_data || {});
          current_gps_ts.forEach(o => {
            if (
              current_time_sec - o <= 15 * 60 &&
              current_gps_data[o].hasOwnProperty("lat") &&
              current_gps_data[o].hasOwnProperty("lng") &&
              current_gps_data[o].lat &&
              current_gps_data[o].lng
            ) {
              positions.push([
                current_gps_data[o].lat,
                current_gps_data[o].lng,
              ]);
            }
          });
        }

        // FIXME: currentGPS and lastGPS are not guaranteed to be sorted

        dataLines.push(positions);
      });
    }

    return (
      <div>
        {dataLines.map(positions => (
          <Polyline key={uuid.v4()} positions={positions} color="#ffffff" />
        ))}
      </div>
    );
  }
}

export default connect(
  {
    connection_id: state`data.connection_id`,
    ready: state`data.ready`,
    oada: state`oada`,
    date: state`diagnostics.date`,
    hour: state`diagnostics.hour`,
    selectedUnit: state`diagnostics.selectedUnit`,
  },
  withStyles(styles, { withTheme: true })(Lines),
);
