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
    var yKey = null;
    var xKey = null;
    if (this.props.measurement === "Latency") {
      _.forEach(Object.values(rawData.heartbeats), (value) => {
        value.latency = value.recTime - value.genTime;
        value.time = new Date(value.genTime*1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric' });
        data.push(value);
      });
      yKey = "latency";
      xKey = "time";
    } else if (this.props.measurement === "Active RSSI") {
      _.forEach(Object.values(rawData.heartbeats), (value) => {
        var connection = _.findKey(value.interfaces, 'active');
        //value.interfaces[_.findKey(value.interfaces, 'active')].time = new Date(value.genTime*1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric' });
        value.interfaces[connection].time = new Date(value.genTime*1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric' });
        data.push(value.interfaces[connection]);
      });
      yKey = "rssi";
      xKey = "time";
      console.log(data)
    } else {
    }

    return (
      <ResponsiveContainer width={'100%'} height={"100%"}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
          <Line type="step" dataKey={yKey} stroke="#8884d8" />
          <CartesianGrid/>
          <XAxis dataKey={xKey}/>
          <YAxis dataKey={yKey}/>
          <Tooltip/>
        </LineChart>
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

