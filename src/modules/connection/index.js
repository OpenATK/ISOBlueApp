import { Module } from "cerebral";
import oadaProvider from "@oada/cerebral-provider";
import * as signals from "./sequences";

let _OADA_HOST = "https://oada.openatk.com";
let _CURRENT_HOST = _OADA_HOST;

export default Module({
  state: {
    dialog_open: true,
    oada_domain_text: _CURRENT_HOST,
    oada_domain: _CURRENT_HOST,
  },
  signals,
  providers: {
    oada: oadaProvider,
  },
});
