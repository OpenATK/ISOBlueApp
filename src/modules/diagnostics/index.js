import { Module } from 'cerebral';
import * as signals from './sequences';

export default Module({
  state: {
    hour: null,
    measurement: 'Latency',
    selectedUnit: null,
    date: null,
    mode: "map",
  },
  signals,
});
