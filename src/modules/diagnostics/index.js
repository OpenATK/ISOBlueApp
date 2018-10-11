import { Module } from 'cerebral';
import * as signals from './sequences';

export default Module({
  state: {
    hour: null,
    measurement: 'GPS',
    selectedUnit: null,
    date: null,
    mode: "map",
  },
  signals,
});
