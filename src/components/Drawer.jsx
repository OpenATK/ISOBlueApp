import React from "react";
import { state, sequences } from "cerebral";
import { connect } from "@cerebral/react";
import { withStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  Drawer,
  Divider,
  Switch,
  Select,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  MenuItem,
  Button,
} from "@material-ui/core";
import RouterIcon from "@material-ui/icons/Router";

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: 240,
    backgroundColor: "#eeeeee",
  },
  toolbar: theme.mixins.toolbar,
});

class Component extends React.Component {
  render() {
    const { classes } = this.props;

    let deviceDetails = <div />;
    const selectedDevice = this.props.selectedDevice;
    if (selectedDevice.device && selectedDevice.day && selectedDevice.hour) {
      const days = Object.keys(
        this.props.oada[this.props.connection.connection_id].bookmarks.isoblue[
          "device-index"
        ][selectedDevice.device]["location"]["day-index"] || {},
      );
      const hours = Object.keys(
        this.props.oada[this.props.connection.connection_id].bookmarks.isoblue[
          "device-index"
        ][selectedDevice.device]["location"]["day-index"][selectedDevice.day][
          "hour-index"
        ] || {},
      );
      const daySelector = (
        <Select
          value={selectedDevice.day}
          renderValue={value => `${value}`}
          onChange={value => this.props.selectDay({ day: value.target.value })}
        >
          {days.map(date => (
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

      const hourSelector = (
        <Select
          value={selectedDevice.hour}
          renderValue={value => `${genTimeLabel(value)}`}
          onChange={value =>
            this.props.selectHour({ hour: value.target.value })
          }
        >
          {hours.map(hour => {
            return (
              <MenuItem key={hour} value={hour}>
                {genTimeLabel(hour)}
              </MenuItem>
            );
          })}
        </Select>
      );

      deviceDetails = (
        <List>
          <Divider />
          <ListItem>
            <ListItemText
              align="center"
              primary={`Device: ${selectedDevice.device}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText align="center">{daySelector}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText align="center">{hourSelector}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText align="center">
              <Button
                variant="contained"
                onClick={() => this.props.unselectDevice({})}
              >
                Unselect Device
              </Button>
            </ListItemText>
          </ListItem>
        </List>
      );
    }

    return (
      <Drawer
        open={this.props.drawer}
        onClose={() => this.props.toggleDrawer()}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem>
            <ListItemText align="center" primary={"Available Devices"} />
          </ListItem>

          <List className={classes.list} component="nav">
            {Object.keys(this.props.devices || {}).map(device => (
              <ListItem
                button
                key={`-${device}`}
                onClick={() => this.props.selectDevice({ device })}
              >
                <ListItemIcon>
                  <RouterIcon />
                </ListItemIcon>
                <ListItemText primary={device} />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    onChange={() => this.props.toggleDeviceSync({ device })}
                    checked={this.props.devices[device].sync}
                    inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          {deviceDetails}
        </List>
      </Drawer>
    );
  }
}

export default connect(
  {
    drawer: state`components.drawer`,
    toggleDrawer: sequences`toggleDrawer`,
    devices: state`devices`,
    selectedDevice: state`selectedDevice`,
    selectDevice: sequences`selectDevice`,
    selectHour: sequences`selectHour`,
    selectDay: sequences`selectDay`,
    unselectDevice: sequences`unselectDevice`,
    toggleDeviceSync: sequences`toggleDeviceSync`,
    connection: state`connection`,
    oada: state`oada`,
  },
  withStyles(styles, { withTheme: true })(Component),
);
