import React from 'react';
import _ from 'lodash';
import { connect } from '@cerebral/react';
import {state, signal} from 'cerebral/tags';
import uuid from 'uuid';
import { CircleMarker, Tooltip } from 'react-leaflet';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});



class Markers extends React.Component {

  render() {
    const { classes } = this.props;
     

 
    const unitMarkers=[];
    if (!this.props.selectedUnit) {
      _.forEach(Object.keys(this.props.snapshots) || {}, (unit) => {
        var tempGPS = this.props.snapshots[unit].location;
        if (tempGPS.lat && tempGPS.lng) {
          unitMarkers.push(
            <CircleMarker
              ref={unit => {this.unit = unit}}
              key={unit}
              center={[
                this.props.snapshots[unit].location.lat,
                this.props.snapshots[unit].location.lng
              ]}
              color={'#ffffff'}
              fillColor={
                (() => {
                  switch (this.props.snapshots[unit].health) {
                    case "Healthy": return '#008000'
                    case "Sick":    return '#ffbf00'
                    case "Down":    return '#707070'
                    default:        return '#707070'
                  }
              })()}
              fillOpacity={1}
              radius={12}
              zIndexOffset={1}
              onClick={(e) => this.props.selectUnit({unit: unit})}>
              <Tooltip
                direction='top'
                offset={[0,-10]}>
                <b>Unit: {unit}</b><br/>
                <center><b>{this.props.snapshots[unit].health}</b></center>
              </Tooltip>
            </CircleMarker>
          )
        };
      });
    } else {
      let lastGPS = _.max(Object.keys(this.props.data[this.props.selectedUnit][this.props.date][this.props.hour].gps || {}));
      if (lastGPS) {
        var tempGPS = this.props.data[this.props.selectedUnit][this.props.date][this.props.hour].gps[lastGPS];
        if (tempGPS.lat && tempGPS.lng) {
          unitMarkers.push(
            <CircleMarker
              ref={this.props.selectedUnit}
              key={this.props.selectedUnit}
              center={[tempGPS.lat, tempGPS.lng]}
              color={'#ffffff'}
              fillColor={
                (() => {
                  switch (this.props.snapshots[this.props.selectedUnit].health) {
                    case "Healthy": return '#008000'
                    case "Sick":    return '#ffbf00'
                    case "Down":    return '#707070'
                    default:        return '#707070'
                  }
              })()}
              fillOpacity={1}
              radius={12}
              zIndexOffset={-10}
              onClick={(e) => this.props.selectUnit({})}>
              <Tooltip
                direction='top'
                offset={[0,-10]}>
                <b>Unit: {this.props.selectedUnit}</b><br/>
                <center><b>{this.props.snapshots[this.props.selectedUnit].health}</b></center>
              </Tooltip>
            </CircleMarker>
          )
        }     
      }
    }
    
    return (
      <div>
        {unitMarkers}
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
  
  selectUnit: signal`diagnostics.selectUnit`,

  },
  withStyles(styles, { withTheme: true })(Markers)
);

