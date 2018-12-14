import React from 'react';
import { connect } from '@cerebral/react';
import {state, signal} from 'cerebral/tags';
import { Map, Marker, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './Map.css';
import Lines from './Lines/';
import Markers from './Markers/';

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
        zIndexOffset={1}
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
          <Markers/>
          <Lines/>
          {currentMarker}
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

