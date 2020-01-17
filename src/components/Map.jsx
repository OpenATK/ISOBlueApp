import React from "react";
import { state, sequences } from "cerebral";
import { connect } from "@cerebral/react";
import { withStyles } from "@material-ui/core/styles";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Tooltip,
  Polyline,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const styles = theme => ({
  map: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "calc(100% - 56px)",
  },
});

class MapComponent extends React.Component {
  render() {
    const { classes } = this.props;

    // Device Markers
    let markers = [];
    Object.keys(this.props.devices || {}).forEach(device => {
      if (
        this.props.devices[device].sync &&
        this.props.devices[device].location.lat &&
        this.props.devices[device].location.lng
      ) {
        markers.push(
          <CircleMarker
            ref={device => {
              this.device = device;
            }}
            key={device}
            center={[
              this.props.devices[device].location.lat,
              this.props.devices[device].location.lng,
            ]}
            color={"#ffffff"}
            fillColor={"#008000"}
            fillOpacity={1}
            radius={12}
            zIndexOffset={1}
          >
            <Tooltip direction="top" offset={[0, -10]} permanent={true}>
              <b>{device}</b>
            </Tooltip>
          </CircleMarker>,
        );
      }
    });

    // Track Line
    const selectedDevice = this.props.selectedDevice;
    let pts = {};
    if (selectedDevice.device && selectedDevice.day && selectedDevice.hour) {
      try {
        const data =
          this.props.oada[this.props.connection.connection_id].bookmarks
            .isoblue["device-index"][selectedDevice.device]["location"][
            "day-index"
          ][selectedDevice.day]["hour-index"][selectedDevice.hour][
            "sec-index"
          ] || {};
        Object.keys(data).forEach(key => {
          if (!isNaN(data[key].lat) && !isNaN(data[key].lng)) {
            pts[data[key].time] = [data[key].lat, data[key].lng];
          }
        });
      } catch {
        console.log("failed to get location points.");
      }
    }

    return (
      <div className={classes.map}>
        <Map
          center={[this.props.mapCenter.lat, this.props.mapCenter.lng]}
          zoom={13}
          style={{ height: "100%", width: "100%", position: "relative" }}
        >
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {markers}

          <div>
            <Polyline
              key={"trackline"}
              positions={Object.values(pts) || []}
              color="#ffffff"
            />
          </div>
        </Map>
      </div>
    );
  }
}

export default connect(
  {
    mapCenter: state`mapCenter`,
    devices: state`devices`,
    connection: state`connection`,
    oada: state`oada`,
    selectedDevice: state`selectedDevice`,
  },
  withStyles(styles, { withTheme: true })(MapComponent),
);
