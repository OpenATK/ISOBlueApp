import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';


const styles = theme => ({

});

class Diagnostics extends React.Component {

  render() {
    const { classes } = this.props

    const visualizing = ( 
      <ListItem>
        <ListItemText align="center">
          <Button
            variant="contained">
            Map View
          </Button>
        </ListItemText>
      </ListItem>
    );
      
    return (
      <List>
        <ListItem>
          <ListItemText 
            align="center" 
            primary={"Selected Unit:"}/>
        </ListItem>
           <ListItemText 
            align="center" 
            primary={"ABC123"}/>
        <Divider/>
        <ListItem>
          <ListItemText
            align="center"
            primary={"Quick Health:"}/>
           <ListItemText
            align="center"
            primary={"Healthy"}/>
        </ListItem>
        <ListItem>
          <ListItemText
            align="center"
            primary={"Last Report:"}/>
           <ListItemText
            align="center"
            primary={"< 1 min"}/>
        </ListItem>
        <ListItem>
          <ListItemText
            align="center"
            primary={"Coverage:"}/>
           <ListItemText
            align="center"
            primary={"Wifi"}/>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText 
            align="center" 
            primary={"Diagnostics"}/>
        </ListItem>
        <ListItem> 
          <ListItemText 
            align="center" 
            primary={"Time Period:"}/>
          <ListItemText
            align="center">
            <Select 
              value={this.props.displayTimePeriod}
              renderValue={value => `${value}`}
              onChange={(value) => this.props.setTimePeriod({timePeriod: value.target.value[0], displayTimePeriod: value.target.value[1]})}>
              <MenuItem value={[1, "1 min"]}>1 min</MenuItem>
              <MenuItem value={[5, "5 mins"]}>5 mins</MenuItem>
              <MenuItem value={[20, "20 mins"]}>20 mins</MenuItem>
              <MenuItem value={[60, "1 hour"]}>1 hour</MenuItem>
              <MenuItem value={[480, "8 hours"]}>8 hours</MenuItem>
              <MenuItem value={[1440, "24 hours"]}>24 hours</MenuItem>
            </Select>
          </ListItemText>
        </ListItem>
        <ListItem> 
          <ListItemText
            align="center">
            <Select 
              value={this.props.measurement}
              renderValue={value => `${value}`}
              onChange={(value) => this.props.setMeasurement({measurement: value.target.value})}>
              <MenuItem value={"Connections"}>Connections</MenuItem>
              <MenuItem value={"LTE Strength"}>LTE Strength</MenuItem>
              <MenuItem value={"Network"}>Network</MenuItem>
            </Select>
          </ListItemText>
        </ListItem>
        {visualizing}
        <Divider/>
        <ListItem>
          <ListItemText align="center">
            <Button
              variant="contained"
              onClick = {() => this.props.selectUnit({})}>
              Back to Main
            </Button>
          </ListItemText>
        </ListItem>
      </List>
    );
  }
}

export default connect({
  displayTimePeriod: state`diagnostics.displayTimePeriod`,
  measurement: state`diagnostics.measurement`,

  selectUnit: signal`session.selectUnit`,
  setTimePeriod: signal`diagnostics.setTimePeriod`,  
  setMeasurement: signal`diagnostics.setMeasurement`,  

  },
  withStyles(styles)(Diagnostics)
);
