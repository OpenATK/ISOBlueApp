import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Summary from './Summary/';
import Diagnostics from './Diagnostics/';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 240,
    backgroundColor: '#eeeeee',
  },
  toolbar: theme.mixins.toolbar,
});

class DrawerContent extends React.Component {

  render() {
    const { classes } = this.props

    var content; 
    if (this.props.selectedUnit) {
      content = <Diagnostics/>
    } else {
      content = <Summary/>
    }

    return (
      <Drawer
        open={this.props.drawerOpen}
        onClose={this.props.toggleDrawerOpen}
        classes= {{
          paper: classes.drawerPaper
        }}>
        <div className={classes.toolbar}/>
        {content}
      </Drawer>
    );
  }
}

export default connect({
  selectedUnit: state`diagnostics.selectedUnit`,
  drawerOpen: state`session.drawerOpen`,

  toggleDrawerOpen: signal`session.toggleDrawerOpen`,
  },
  withStyles(styles)(DrawerContent)
);



