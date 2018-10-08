import { Module } from 'cerebral';
import * as signals from './sequences';

export default Module({

  state: {
    targetCenter: { lat: 40.428641, lng: -86.913783 },
    userLocation: { lat: 40.428641, lng: -86.913783 },
    userLocationAvailable: false,
  },

  signals,

});
