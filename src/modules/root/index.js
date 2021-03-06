import { Module } from "cerebral";

import session from "../session/";
import diagnostics from "../diagnostics/";
import map from "../map/";
import data from "../data/";
import snapshots from "../snapshots/";
import connection from "../connection/";
import oadaModule from "@oada/cerebral-module";
import oadaProvider from "@oada/cerebral-provider";
import * as signals from "./sequences";

export default Module({
  modules: {
    connection,
    session,
    oada: oadaModule,
    diagnostics,
    map,
    data,
    snapshots,
  },
  signals,
  providers: {
    oada: oadaProvider,
  },
});
