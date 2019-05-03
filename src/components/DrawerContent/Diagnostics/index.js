import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";

const styles = theme => ({});

class Diagnostics extends React.Component {
  render() {
    const visualizing = (
      <ListItem>
        <ListItemText align="center">
          <Button onClick={() => this.props.toggleMode({})} variant="contained">
            {this.props.mode === "map" ? "Show Statistics" : "Show Map"}
          </Button>
        </ListItemText>
      </ListItem>
    );

    var measurements;
    if (this.props.mode === "map") {
      measurements = ["GPS"];
    } else {
      measurements = ["Latency", "Wifi RSSI", "Cellular RSSI"];
    }
    const measurementSelect = (
      <Select
        value={this.props.measurement}
        renderValue={value => `${value}`}
        onChange={value =>
          this.props.setMeasurement({ measurement: value.target.value })
        }
      >
        {measurements.map(measurement => (
          <MenuItem key={measurement} value={measurement}>
            {measurement}
          </MenuItem>
        ))}
      </Select>
    );

    const dateSelect = (
      <Select
        value={this.props.date}
        renderValue={value => `${value}`}
        onChange={value => this.props.setDate({ date: value.target.value })}
      >
        {Object.keys(
          this.props.oada[this.props.connection_id].bookmarks.isoblue[
            "device-index"
          ][this.props.selectedUnit]["location"]["day-index"],
        ).map(date => (
          <MenuItem key={date} value={date}>
            {date}
          </MenuItem>
        ))}
        ;
      </Select>
    );

    // Get timezone offset
    const tzOffsetMinutes = new Date().getTimezoneOffset();
    const genTimeLabel = hour => {
      // UTC -> Local time zone conversion
      // Assume hour has format hh:mm
      const hhmm = hour.split(":");
      const utcMinutes = 60 * parseInt(hhmm[0]) + parseInt(hhmm[1]);
      var localMinutes = utcMinutes - tzOffsetMinutes;
      var msg = "";
      if (localMinutes < 0) {
        localMinutes += 1440;
        msg = " (-1 day)";
      } else if (localMinutes > 1440) {
        localMinutes -= 1440;
        msg = " (+1 day)";
      }
      const localHH = Math.floor(localMinutes / 60);
      const localMM = localMinutes % 60;
      return (
        localHH.toString().padStart(2, "0") +
        ":" +
        localMM.toString().padStart(2, "0") +
        msg
      );
    };

    const hourSelect = (
      <Select
        value={this.props.hour}
        renderValue={value => `${genTimeLabel(value)}`}
        onChange={value => this.props.setHour({ hour: value.target.value })}
      >
        {Object.keys(
          this.props.oada[this.props.connection_id].bookmarks.isoblue[
            "device-index"
          ][this.props.selectedUnit]["location"]["day-index"][this.props.date][
            "hour-index"
          ],
        ).map(hour => {
          return (
            <MenuItem key={hour} value={hour}>
              {genTimeLabel(hour)}
            </MenuItem>
          );
        })}
        ;
      </Select>
    );

    return (
      <List>
        <ListItem>
          <ListItemText align="center" primary={"Selected Unit:"} />
        </ListItem>
        <ListItem>
          <ListItemText align="center" primary={this.props.selectedUnit} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText align="center" primary="ISOBlue Status:" />
        </ListItem>
        <ListItem>
          <ListItemText align="center" primary={"Health:"} />
          <ListItemText
            align="center"
            primary={this.props.snapshots[this.props.selectedUnit].health}
          />
        </ListItem>
        <ListItem>
          <ListItemText align="center" primary={"Last Report:"} />
          <ListItemText
            align="center"
            primary={
              this.props.snapshots[this.props.selectedUnit].lastReport === "NA"
                ? "NA"
                : this.props.snapshots[this.props.selectedUnit]
                    .lastLocationReport + " min"
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText align="center" primary={"Available Data:"} />
        </ListItem>
        <ListItem>
          <ListItemText align="center">{measurementSelect}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText align="center">{dateSelect}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText align="center">{hourSelect}</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText align="center">
            <Button
              variant="contained"
              onClick={() => this.props.unselectUnit({})}
            >
              Back to Main
            </Button>
          </ListItemText>
        </ListItem>
      </List>
    );
  }
}

export default connect(
  {
    date: state`diagnostics.date`,
    hour: state`diagnostics.hour`,
    measurement: state`diagnostics.measurement`,
    selectedUnit: state`diagnostics.selectedUnit`,
    snapshots: state`snapshots`,
    data: state`data`,
    mode: state`diagnostics.mode`,
    oada: state`oada`,
    connection_id: state`data.connection_id`,

    selectUnit: signal`diagnostics.selectUnit`,
    unselectUnit: signal`diagnostics.unselectUnit`,
    setDate: signal`diagnostics.setDate`,
    setHour: signal`diagnostics.setHour`,
    setMeasurement: signal`diagnostics.setMeasurement`,
    toggleMode: signal`diagnostics.toggleMode`,
  },
  withStyles(styles)(Diagnostics),
);
