import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
            onClick = {() => this.props.toggleMode({})}
            variant="contained">
            {(this.props.mode === "map") ? "View Graph" : "View Map"}
          </Button>
        </ListItemText>
      </ListItem>
    );

    const dateSelect = (
      <Select 
        value={this.props.date}
        renderValue={value => `${value}`}
        onChange={(value) => this.props.setDate({date: value.target.value})}>
        {Object.keys(this.props.data[this.props.selectedUnit]).map(date => (
          <MenuItem key={date} value={date}>{date}</MenuItem>
        ))};
      </Select>
    );
 
    const hourSelect = (
      <Select 
        value={this.props.hour}
        renderValue={value => `${value}`}
        onChange={(value) => this.props.setHour({hour: value.target.value})}>
        {Object.keys(this.props.data[this.props.selectedUnit][this.props.date]).map(hour => (
          <MenuItem key={hour} value={hour}>{hour}</MenuItem>
        ))};
      </Select>
    );
      
    return (
      <List>
        <ListItem>
          <ListItemText 
            align="center" 
            primary={"Selected Unit:"}/>
        </ListItem>
        <ListItem>
           <ListItemText 
            align="center" 
            primary={this.props.selectedUnit}/>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText
            align="center"
            primary="Live Snapshot:"/>
        </ListItem>
        <ListItem>
          <ListItemText
            align="center"
            primary={"Quick Health:"}/>
           <ListItemText
            align="center"
            primary={this.props.snapshots[this.props.selectedUnit].health}/>
        </ListItem>
        <ListItem>
          <ListItemText
            align="center"
            primary={"Last Report:"}/>
           <ListItemText
            align="center"
            primary={(this.props.snapshots[this.props.selectedUnit].lastReport === "NA")  ? "NA"  : this.props.snapshots[this.props.selectedUnit].lastReport+" min"}/>
        </ListItem>
        <ListItem>
          <ListItemText
            align="center"
            primary={"Coverage:"}/>
           <ListItemText
            align="center"
            primary={this.props.snapshots[this.props.selectedUnit].connection}/>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText 
            align="center" 
            primary={"Available Data:"}/>
        </ListItem>
        <ListItem> 
          <ListItemText
            align="center">
            <Select 
              value={this.props.measurement}
              renderValue={value => `${value}`}
              onChange={(value) => this.props.setMeasurement({measurement: value.target.value})}>
              <MenuItem value={"Latency"}>Latency</MenuItem>
              <MenuItem value={"Active RSSI"}>Active RSSI</MenuItem>
              <MenuItem value={"All RSSI's"}>All RSSIs</MenuItem>
            </Select>
          </ListItemText>
        </ListItem> 
        <ListItem> 
          <ListItemText
            align="center">
            {dateSelect}
          </ListItemText>
        </ListItem>
        <ListItem> 
          <ListItemText
            align="center">
            {hourSelect}
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
  date: state`diagnostics.date`,
  hour: state`diagnostics.hour`,
  measurement: state`diagnostics.measurement`,
  selectedUnit: state`diagnostics.selectedUnit`,
  snapshots: state`snapshots`,
  data: state`data`,
  mode: state`diagnostics.mode`,

  selectUnit: signal`diagnostics.selectUnit`,
  setDate: signal`diagnostics.setDate`,  
  setHour: signal`diagnostics.setHour`,  
  setMeasurement: signal`diagnostics.setMeasurement`,  
  toggleMode: signal`diagnostics.toggleMode`,  

  },
  withStyles(styles)(Diagnostics)
);
