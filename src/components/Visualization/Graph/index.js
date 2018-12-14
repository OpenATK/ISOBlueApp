import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import _ from 'lodash';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

class Graph extends React.Component {

  render() {

    const { classes } = this.props;
  
    var rawData;
    if(this.props.selectedUnit && this.props.date && this.props.hour) {
      rawData = this.props.data[this.props.selectedUnit][this.props.date][this.props.hour];
    }

    var data = [];
    var chart;
    if (this.props.measurement === "Latency" && rawData) {
      _.forEach(Object.values(rawData.heartbeats || {}), (value) => {
        value.latency = value.recTime - value.genTime;
        value.time = new Date(value.genTime*1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric' });
        data.push(value);
      });

      chart = (
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
          <Line type="step" isAnimationActive={false} dataKey={"latency"} stroke="#8884d8" />
          <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
          <XAxis dataKey={'time'}/>
          <YAxis dataKey={'latency'}/>
          <Tooltip/>
        </LineChart>
      );

    
    } else if (this.props.measurement === "Wifi RSSI" && rawData) {
      _.forEach(Object.values(rawData.heartbeats || {}), (value) => {
        _.forEach(value.interfaces, (connection) => {
          if(connection.type == "wifi") {
            connection.time = new Date(value.genTime*1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric' });
            data.push(connection);
          }
        });
      });
    
      chart = (
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
          <Line type="step" isAnimationActive={false} dataKey={"rssi"} stroke="#8884d8" />
          <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
          <XAxis dataKey={'time'}/>
          <YAxis dataKey={'rssi'}/>
          <Tooltip/>
        </LineChart>
      );
 
    } else if (this.props.measurement === "Cellular RSSI" && rawData) {
      _.forEach(Object.values(rawData.heartbeats || {}), (value) => {
        _.forEach(value.interfaces, (connection) => {
          if(connection.type == "cellular") {
            connection.time = new Date(value.genTime*1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric' });
            data.push(connection);
          }
        });
      });
    
      chart = (
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
          <Line type="step" isAnimationActive={false} dataKey={"rssi"} stroke="#8884d8" />
          <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
          <XAxis dataKey={'time'}/>
          <YAxis dataKey={'rssi'}/>
          <Tooltip/>
        </LineChart>
      );
    } else {
      chart = ( 
        <LineChart margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
        </LineChart>
      );
    } 
 
    return (
      <ResponsiveContainer width={'100%'} height={"100%"}>
        {chart}
      </ResponsiveContainer>
   );
  }
}

export default connect (
  {
  date: state`diagnostics.date`,
  hour: state`diagnostics.hour`,
  selectedUnit: state`diagnostics.selectedUnit`,
  measurement: state`diagnostics.measurement`,
  data: state`data`,
  },
  withStyles(styles, { withTheme: true })(Graph)
);

