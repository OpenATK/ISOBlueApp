import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SyncIcon from "@material-ui/icons/Sync";
import SyncProblemIcon from "@material-ui/icons/SyncProblem";
import SyncDisabledIcon from "@material-ui/icons/SyncDisabled";

import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";

const styles = theme => ({
  list: {
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    //position: 'relative',
    overflow: "auto",
    height: 300,
    margin: 1.5 * theme.spacing.unit,
  },
  textField: {
    margin: 1.5 * theme.spacing.unit,
  },
  healthy: { color: "#008000" },
  sick: { color: "#ffbf00" },
  down: { color: "#ff0000" },
});

class Summary extends React.Component {
  render() {
    const { classes } = this.props;

    // create unit list
    var units;
    if (Object.keys(this.props.health || {}).length > 0) {
      units = (
        <List className={classes.list} component="nav">
          {Object.keys(this.props.health).map(unit => (
            <ListItem
              button
              key={`-${unit}`}
              onClick={() => this.props.selectUnit({ unit: unit })}
            >
              <ListItemText primary={unit} />
              <ListItemIcon>
                {(() => {
                  switch (this.props.health[unit]) {
                    case "Healthy":
                      return <SyncIcon className={classes.healthy} />;
                    case "Sick":
                      return <SyncProblemIcon className={classes.sick} />;
                    case "Down":
                      return <SyncDisabledIcon />;
                    default:
                      return <SyncDisabledIcon />;
                  }
                })()}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      );
    } else {
      units = <List className={classes.list} component="nav" />;
    }

    // wrapper for unit list
    return (
      <List>
        <ListItem>
          <ListItemText align="center" primary={"My ISOBlues:"} />
        </ListItem>
        {units}
        <Divider />
      </List>
    );
  }
}

export default connect(
  {
    health: state`health`,
    selectUnit: signal`diagnostics.selectUnit`,
  },
  withStyles(styles)(Summary),
);
