import React from "react";

import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
//import TextField from '@material-ui/core/TextField';
import MyLocationIcon from "@material-ui/icons/MyLocation";
import MenuIcon from "@material-ui/icons/Menu";

import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";

const styles = theme => ({
  flex: {
    flex: 1,
  },
  icon: {
    color: "#FFFFFF",
    [theme.breakpoints.up("xs")]: {
      width: 5 * theme.spacing.unit,
      height: 5 * theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    [theme.breakpoints.down("xs")]: {
      width: 4 * theme.spacing.unit,
      height: 4 * theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
  },
});

class AppBarContent extends React.Component {
  render() {
    const { classes } = this.props;

    var userLocationButton;
    if (this.props.userLocationAvailable) {
      userLocationButton = (
        <IconButton onClick={() => this.props.centerOnUser({})}>
          <MyLocationIcon className={classes.icon} />
        </IconButton>
      );
    } else {
      userLocationButton = null;
    }

    return (
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open Drawer"
          onClick={() => this.props.toggleDrawerOpen({})}
        >
          <MenuIcon className={classes.icon} />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          ISOBlueApp [1.1.1]
        </Typography>
        {userLocationButton}
      </Toolbar>
    );
  }
}

export default connect(
  {
    userLocationAvailable: state`map.userLocationAvailable`,

    centerOnUser: signal`map.centerOnUser`,
    toggleDrawerOpen: signal`session.toggleDrawerOpen`,
  },
  withStyles(styles)(AppBarContent),
);
