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

    var rawData = this.props.data[this.props.selectedUnit][this.props.date][this.props.hour];


    var data = [];
    var chart;
    if (this.props.measurement === "Latency") {
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


    } else if (this.props.measurement === "Active RSSI") {
      _.forEach(Object.values(rawData.heartbeats || {}), (value) => {
        var connection = _.findKey(value.interfaces, 'active');
        value.interfaces[connection].time = new Date(value.genTime*1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric' });
        data.push(value.interfaces[connection]);
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


    } else if (this.props.measurement === "All RSSIs") {
      var count = 0;
      _.forEach(Object.values(rawData.heartbeats || {}), (value) => {
        var datapoint = {time: new Date(value.genTime*1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric' })};
        _.forEach(Object.values(value.interfaces), (value, key) => {
          datapoint["name"+String(key)] = value.name;
          datapoint["rssi"+String(key)] = value.rssi;
          if ((key) > count) {
            count = key;
          }
        });
        data.push(datapoint);
      });
  
      var countList = [] 
      for(var i=0; i <= count; i++) {
        countList.push(i);
      }
 
      chart = (
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
          {countList.map(index =>(
            <Line key={index} type="step" isAnimationActive={false} dataKey={"rssi"+String(index)} stroke={'#0884d8'}/>
          ))} 
          <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
          <XAxis dataKey={'time'}/>
          <YAxis/>
          <Tooltip/>
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

