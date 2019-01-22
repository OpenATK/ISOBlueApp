import { sequence } from 'cerebral';
import { state, props } from 'cerebral/tags';
import { toggle } from 'cerebral/operators';

export const toggleDrawerOpen = sequence("toggleDrawerOpen", [
  toggle(state`session.drawerOpen`),
]);
