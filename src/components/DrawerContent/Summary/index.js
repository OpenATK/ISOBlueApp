import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';


const styles = theme => ({
  list: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 200,
    margin: 1.5*theme.spacing.unit,
  },
});

class Summary extends React.Component {

  render() {
    const { classes } = this.props
   
    return (
      <List>
        <ListItem>
          <ListItemText 
            align="center" 
            primary={"My ISOBlues:"}/>
        </ListItem>
        <List className={classes.list}>
          <ul>
            {this.props.units.map(unit => ( 
              <ListItem 
                key={`-${unit}`}
                onClick={() => {this.props.selectUnit({})}}>
                <ListItemText primary={`Unit ${unit}`}/>
              </ListItem>
            ))}
          </ul>
        </List>
        <Divider/>
        <ListItem>
          <ListItemText
            align="center"
            primary={"Over the last:"}/>
        </ListItem>
        <ListItem>
          <ListItemText
            align="center">
            <FormControl>
            <Select 
              value={this.props.displayCutOffTime}
              renderValue={value => `${value}`}
              onChange={(value) => this.props.setCutOffTime({cutOffTime: value.target.value[0], displayCutOffTime: value.target.value[1]})}>
              <MenuItem value={[1,"1 hour"]}>1 hour</MenuItem>
              <MenuItem value={[8, "8 hours"]}>8 hours</MenuItem>
              <MenuItem value={[24, "24 hours"]}>24 hours</MenuItem>
              <MenuItem value={[168, "1 week"]}>1 week</MenuItem>
              <MenuItem value={[720, "1 month"]}>1 month</MenuItem>
              <MenuItem value={[4320, "6 months"]}>6 months</MenuItem>
            </Select>
            </FormControl>
          </ListItemText>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText
            align="center"
            primary={"Account: Gary Grower"}/>
        </ListItem>
        <ListItem>
          <ListItemText align="center">
            <Button
              variant="contained">
              Log Out
            </Button>
          </ListItemText>
        </ListItem>
      </List>
    );
  }
}

export default connect({
  displayCutOffTime: state`map.displayCutOffTime`,
  units: state`units.units`,

  setCutOffTime: signal`map.setCutOffTime`,  
  selectUnit: signal`session.selectUnit`,  

  },
  withStyles(styles)(Summary)
);



              //onChange={(value) => this.props.setCutOffTime({cutOffTime: value})}>
