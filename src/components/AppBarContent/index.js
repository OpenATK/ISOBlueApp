import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
//import TextField from '@material-ui/core/TextField';
import MyLocationIcon from '@material-ui/icons/MyLocation';

import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  icon: {
    color: '#FFFFFF',
    [theme.breakpoints.up('xs')]: {
      width: 5*theme.spacing.unit,
      height: 5*theme.spacing.unit,
    },
    [theme.breakpoints.down('xs')]: {
      width: 4*theme.spacing.unit,
      height: 4*theme.spacing.unit,
    },
  },
  //textField: {
    //marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
  //},
});

class AppBarContent extends React.Component {

  render() {
    const { classes } = this.props

    var userLocationButton;
    if (this.props.userLocationAvailable) {
      userLocationButton = 
      <IconButton
        onClick={() => this.props.centerOnUser({})}>
        <MyLocationIcon className={classes.icon}/>
      </IconButton>
    } else {
      userLocationButton = null;
    }

    return (
      <Toolbar>
        <Typography variant='title' color='inherit' className={classes.flex}>
          ISOBlueApp [0.0.1]
        </Typography>
        {/*<TextField
          type="date"
          defaultValue={this.props.date}
          className={classes.textField}
          onChange={(e) => this.props.setDate({date: e.target.value})}
        />*/}        
        {userLocationButton}
      </Toolbar>
    )
  }
}

export default connect({
  userLocationAvailable: state`map.userLocationAvailable`,
  //date: state`session.date`,

  centerOnUser: signal`map.centerOnUser`,  
  //setDate: signal`session.setDate`,  

  },
  withStyles(styles)(AppBarContent)
);



