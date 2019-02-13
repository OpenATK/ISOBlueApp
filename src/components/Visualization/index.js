import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";

import Map from "./Map/";
import Graph from "./Graph/";

class Visualization extends React.Component {
  render() {
    var graphic;
    if (this.props.mode === "map") {
      graphic = <Map />;
    } else {
      graphic = <Graph />;
    }

    return graphic;
  }
}

export default connect(
  {
    mode: state`diagnostics.mode`,
  },
  Visualization,
);
