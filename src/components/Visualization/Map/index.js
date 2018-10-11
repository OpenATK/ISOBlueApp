import React from 'react';
//import _ from 'lodash';
import { connect } from '@cerebral/react';
import {state, signal} from 'cerebral/tags';
//import uuid from 'uuid';
//import Leaflet from 'leaflet';
import { Map, Marker, CircleMarker, Tooltip, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './Map.css';
import Lines from './Lines/';

const styles = theme => ({
  map: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: "calc(100% - 56px)",
  },
});

const mapTiles = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const attrib='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';


class map extends React.Component {

  componentDidMount() {
    this.refs.map.leafletElement.locate()
  }
 
 
  render() {
    const { classes } = this.props;
      
    const currentMarker=[];
    if (this.props.userLocationAvailable) {
    currentMarker.push(
      <Marker
        key={"user"}
        position={[this.props.userLocation.lat, this.props.userLocation.lng]}>
      </Marker>
    );
    }
 
    const unitMarkers=[];
    Object.keys(this.props.snapshots).map(unit => (
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
          onClick={(e) => this.props.selectUnit({unit: unit})}>
          <Tooltip 
            direction='top'
            offset={[0,-10]}>
            <b>Unit: {unit}</b><br/>
            <center><b>{this.props.snapshots[unit].health}</b></center> 
          </Tooltip>
        </CircleMarker>
      )
    ))


    return (
      <div className={classes.map}>
        <Map
          dragging={true}
          center={[this.props.targetCenter.lat, this.props.targetCenter.lng]} 
          ref='map'
          zoom={18}
          onlocationfound={(e)=>this.props.storeUserLocation({lat:e.latlng.lat, lng:e.latlng.lng})}>
          <TileLayer
            url={mapTiles}
            attribution={attrib}
          />
          <Lines/>
          {currentMarker}
          {unitMarkers}
        </Map>
      </div>
    );
  }
}

map.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect({
  targetCenter: state`map.targetCenter`,
  userLocation: state`map.userLocation`,
  userLocationAvailable: state`map.userLocationAvailable`,
  snapshots: state`snapshots`,

  storeUserLocation: signal`map.storeUserLocation`,
  selectUnit: signal`diagnostics.selectUnit`,

  },
  withStyles(styles, { withTheme: true })(map)
);

