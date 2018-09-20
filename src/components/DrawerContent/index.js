import React from 'react';
import { connect } from '@cerebral/react';
import { signal, state } from 'cerebral/tags';

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
    if (this.props.unitSelected) {
      content = <Diagnostics/>
    } else {
      content = <Summary/>
    }

    return (
      <Drawer
        variant="permanent"
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
  unitSelected: state`session.unitSelected`,
  },
  withStyles(styles)(DrawerContent)
);



