import { Module, sequence } from 'cerebral';
import { state } from 'cerebral/tags';
import { toggle } from 'cerebral/operators';

export default Module({
  state: {
    unitSelected: false,
  },
  signals: {
    selectUnit: sequence("selectUnit", [
      toggle(state`session.unitSelected`),
    ]),
  },
});
