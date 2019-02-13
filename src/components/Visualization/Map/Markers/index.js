import React from "react";
import _ from "lodash";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { CircleMarker, Tooltip } from "react-leaflet";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Markers extends React.Component {
  render() {
    const unitMarkers = [];
    _.forEach(Object.keys(this.props.snapshots) || {}, unit => {
      var tempGPS = this.props.snapshots[unit].location;
      if (
        tempGPS &&
        tempGPS.hasOwnProperty("lat") &&
        tempGPS.hasOwnProperty("lng") &&
        tempGPS.lat &&
        tempGPS.lng
      ) {
        unitMarkers.push(
          <CircleMarker
            ref={unit => {
              this.unit = unit;
            }}
            key={unit}
            center={[
              this.props.snapshots[unit].location.lat,
              this.props.snapshots[unit].location.lng,
            ]}
            color={"#ffffff"}
            fillColor={(() => {
              switch (this.props.snapshots[unit].health) {
                case "Healthy":
                  return "#008000";
                case "Sick":
                  return "#ffbf00";
                case "Down":
                  return "#707070";
                default:
                  return "#707070";
              }
            })()}
            fillOpacity={1}
            radius={12}
            zIndexOffset={1}
            onClick={e => this.props.selectUnit({ unit: unit })}
          >
            <Tooltip direction="top" offset={[0, -10]}>
              <b>Unit: {unit}</b>
              <br />
              <center>
                <b>{this.props.snapshots[unit].health}</b>
              </center>
            </Tooltip>
          </CircleMarker>,
        );
      }
    });

    return <div>{unitMarkers}</div>;
  }
}

export default connect(
  {
    snapshots: state`snapshots`,
    selectUnit: signal`diagnostics.selectUnit`,
  },
  withStyles(styles, { withTheme: true })(Markers),
);
