import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SyncIcon from '@material-ui/icons/Sync';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import SyncDisabledIcon from '@material-ui/icons/SyncDisabled';

import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';


const styles = theme => ({
  list: {
    width: '90%',
    backgroundColor: theme.palette.background.paper,
    //position: 'relative',
    overflow: 'auto',
    height: 300,
    margin: 1.5*theme.spacing.unit,
  },
  textField: {
    margin: 1.5*theme.spacing.unit,
  },
  healthy: {color: "#008000"},
  sick: {color: "#ffbf00"},
  down: {color: "#ff0000"},
});

class Summary extends React.Component {

  render() {
    const { classes } = this.props
 
 
    var units;
    if (Object.keys(this.props.snapshots).length > 0) {
      units =
        <List className={classes.list} component="nav">
        {Object.keys(this.props.snapshots).map(unit => ( 
          <ListItem button
            key={`-${unit}`}
            onClick={() => this.props.selectUnit({unit: unit})}>
            <ListItemText primary={unit}/>
            <ListItemIcon>
              {(() => {
                switch (this.props.snapshots[unit].health) {
                  case "Healthy": return <SyncIcon className={classes.healthy}/>;
                  case "Sick":    return <SyncProblemIcon className={classes.sick}/>;
                  case "Down":    return <SyncDisabledIcon/>;
                  default:        return <SyncDisabledIcon/>;
                } 
              })()}
            </ListItemIcon>
          </ListItem>
        ))}
        </List>
    } else {
      units =  
        <List className={classes.list} component="nav"/>
    }

    return (
      <List>
        <ListItem>
          <ListItemText 
            align="center" 
            primary={"My ISOBlues:"}/>
        </ListItem>
          {units}
        <Divider/>
        {/*<ListItem>
          <TextField
            type="date"
            defaultValue={this.props.date}
            className={classes.textField}
            onChange={(e) => this.props.setDate({date: e.target.value})}
          />
        </ListItem>
        <Divider/>*/}
        {/*<ListItem>
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
        <Divider/>*/}
        {/*<ListItem>
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
        </ListItem>*/}
      </List>
    );
  }
}

export default connect({
  //displayCutOffTime: state`map.displayCutOffTime`,
  data: state`data`,
  snapshots: state`snapshots`,
  date: state`session.date`,

  //setCutOffTime: signal`map.setCutOffTime`,  
  selectUnit: signal`diagnostics.selectUnit`,  
  setDate: signal`session.setDate`,


  },
  withStyles(styles)(Summary)
);



              //onChange={(value) => this.props.setCutOffTime({cutOffTime: value})}>
