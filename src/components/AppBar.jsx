import React from "react";
import { state, sequences } from "cerebral";
import { connect } from "@cerebral/react";
import { withStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SyncIcon from "@material-ui/icons/Sync";

const styles = theme => ({
  flex: {
    flex: 1,
  },
  connectopmStatusIndicator: {
    marginLeft: "auto",
  },
});

class Component extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open Drawer"
          onClick={() => this.props.toggleDrawer()}
        >
          <MenuIcon className={classes.icon} />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          ISOBlueApp [2.0.1]
        </Typography>
        <div className={classes.connectopmStatusIndicator}>
          <Typography variant="h6" color="inherit">
            {this.props.connection_id ? "Connected" : "Not Connected"}
          </Typography>
        </div>
      </Toolbar>
    );
  }
}

export default connect(
  {
    toggleDrawer: sequences`toggleDrawer`,
    connection_id: state`connection.connection_id`,
  },
  withStyles(styles)(Component),
);
