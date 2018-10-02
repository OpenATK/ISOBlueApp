import { Module } from 'cerebral';
import * as signals from './sequences';

export default Module({
  state: {
    timePeriod: '60',
    displayTimePeriod: '1 hour',
    measurement: 'LTE Strength',
    selectedUnit: null,
  },
  signals,
});
