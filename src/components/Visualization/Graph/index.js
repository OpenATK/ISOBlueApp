import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import _ from "lodash";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Graph extends React.Component {
  render() {
    var rawData;
    if (this.props.selectedUnit && this.props.date && this.props.hour) {
      rawData = this.props.oada[this.props.connection_id].bookmarks.isoblue[
        "device-index"
      ][this.props.selectedUnit]["day-index"][this.props.date]["hour-index"][
        this.props.hour
      ];
    } else {
      // this should not happen
      return null;
    }

    var data = [];
    var chart;
    if (this.props.measurement === "Latency" && rawData) {
      _.forEach(Object.values(rawData.heartbeats || {}), value => {
        value.latency = value.recTime - value.genTime;
        value.time = new Date(value.genTime * 1000).toLocaleTimeString(
          "en-US",
          { hour: "numeric", minute: "numeric" },
        );
        data.push(value);
      });

      chart = (
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 80 }}
        >
          <Line
            type="step"
            isAnimationActive={false}
            dataKey={"latency"}
            stroke="#8884d8"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey={"time"}
            label={{ value: "Time", position: "insideBottom", dy: 20 }}
          />
          <YAxis
            dataKey={"latency"}
            label={{
              value: "Latency (sec)",
              position: "insideLeft",
              angle: -90,
            }}
          />
          <Tooltip />
        </LineChart>
      );
    } else if (this.props.measurement === "Wifi RSSI" && rawData) {
      _.forEach(Object.values(rawData.heartbeats || {}), value => {
        _.forEach(value.interfaces, connection => {
          if (connection.type === "wifi") {
            connection.time = new Date(value.genTime * 1000).toLocaleTimeString(
              "en-US",
              { hour: "numeric", minute: "numeric" },
            );
            data.push(connection);
          }
        });
      });

      chart = (
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 80 }}
        >
          <Line
            type="step"
            isAnimationActive={false}
            dataKey={"rssi"}
            stroke="#8884d8"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey={"time"} />
          <YAxis
            dataKey={"rssi"}
            label={{
              value: "WiFi RSSI (dB)",
              position: "insideLeft",
              angle: -90,
            }}
          />
          <Tooltip />
        </LineChart>
      );
    } else if (this.props.measurement === "Cellular RSSI" && rawData) {
      _.forEach(Object.values(rawData.heartbeats || {}), value => {
        _.forEach(value.interfaces, connection => {
          if (connection.type === "cellular") {
            connection.time = new Date(value.genTime * 1000).toLocaleTimeString(
              "en-US",
              { hour: "numeric", minute: "numeric" },
            );
            data.push(connection);
          }
        });
      });

      chart = (
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 80 }}
        >
          <Line
            type="step"
            isAnimationActive={false}
            dataKey={"rssi"}
            stroke="#8884d8"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey={"time"} />
          <YAxis
            dataKey={"rssi"}
            label={{
              value: "Cellular RSSI (dB)",
              position: "insideLeft",
              angle: -90,
            }}
          />
          <Tooltip />
        </LineChart>
      );
    } else {
      chart = (
        <LineChart margin={{ top: 20, right: 30, left: 0, bottom: 80 }} />
      );
    }

    return (
      <ResponsiveContainer width={"100%"} height={"100%"}>
        {chart}
      </ResponsiveContainer>
    );
  }
}

export default connect(
  {
    connection_id: state`data.connection_id`,
    date: state`diagnostics.date`,
    hour: state`diagnostics.hour`,
    selectedUnit: state`diagnostics.selectedUnit`,
    measurement: state`diagnostics.measurement`,
    oada: state`oada`,
    data: state`data`,
  },
  withStyles(styles, { withTheme: true })(Graph),
);
