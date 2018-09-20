import React from 'react';
//import _ from 'lodash';
import { connect } from '@cerebral/react';
import {state, signal} from 'cerebral/tags';
//import uuid from 'uuid';
//import Leaflet from 'leaflet';
import { Map, Marker, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './Map.css';

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


class Visualization extends React.Component {

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
          {currentMarker}
        </Map>
      </div>
    );
  }
}

Visualization.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect({
  targetCenter: state`map.targetCenter`,
  userLocation: state`map.userLocation`,
  userLocationAvailable: state`map.userLocationAvailable`,

  storeUserLocation: signal`map.storeUserLocation`,

  },
  withStyles(styles, { withTheme: true })(Visualization)
);


