import React from 'react';
import _ from 'lodash';
import { connect } from '@cerebral/react';
import {state, signal} from 'cerebral/tags';
import uuid from 'uuid';
//import Leaflet from 'leaflet';
import { Polyline } from 'react-leaflet';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});



class Lines extends React.Component {

  render() {
    const { classes } = this.props;
    
    var dataLines = [];
    var healthyLines = [];
    var sickLines = [];
    _.forEach(Object.keys(this.props.snapshots), (unit) => {
      if (unit === this.props.selectedUnit) { 
        var gps = this.props.data[this.props.selectedUnit][this.props.date][this.props.hour].gps;
        var positions = [];
        _.forEach(gps, (instance) => {
          var point = [instance.lat, instance.lng];
          positions.push(point);
        });
        dataLines.push(positions);       

      } else if (this.props.snapshots[unit].health === "Healthy" || this.props.snapshots[unit].health === "Sick") {
        var positions = [];
        var liveTime = Math.round(new Date().getTime() /1000);
        var date = _.max(Object.keys(this.props.data[unit]));
        var hours = Object.keys(this.props.data[unit][date]);
        var currentHour = _.max(hours);
        var lastHour = _.max(_.remove(hours, (n) => {return n != currentHour}));
        var currentGPS = Object.keys(this.props.data[unit][date][currentHour].gps);
        var lastGPS = Object.keys(this.props.data[unit][date][lastHour].gps);
        
        _.forEach(currentGPS, (time) => {
          if ((liveTime - time) <= (15*60)) {
            var point = [
              this.props.data[unit][date][currentHour].gps[time].lat,
              this.props.data[unit][date][currentHour].gps[time].lng,
            ];
            positions.push(point);
          }
        });
        _.forEach(lastGPS, (time) => {
          if ((liveTime - time) <= (15*60)) {
            var point = [
              this.props.data[unit][date][lastHour].gps[time].lat,
              this.props.data[unit][date][lastHour].gps[time].lng,
            ];
            positions.push(point);
          }
        });
        if (this.props.snapshots[unit].health === "Healthy") {
          healthyLines.push(positions);      
        } else {
          sickLines.push(positions);
        } 
      } 
    });
      
    return (
      <div>
        {dataLines.map(positions =>(
          <Polyline key={uuid.v4()} positions={positions} color='#ffffff'/>
        ))}
        {healthyLines.map(positions =>(
          <Polyline key={uuid.v4()} positions={positions} color='#008000'/>
        ))}
         {sickLines.map(positions =>(
          <Polyline key={uuid.v4()} positions={positions} color='#ffbf00'/>
        ))}
      </div>
    );
  }
}


export default connect({
  snapshots: state`snapshots`,
  data: state`data`,
  date: state`diagnostics.date`,
  hour: state`diagnostics.hour`,
  selectedUnit: state`diagnostics.selectedUnit`,


  },
  withStyles(styles, { withTheme: true })(Lines)
);

