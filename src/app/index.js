import App from "cerebral";
import * as sequences from "./sequences";
//import * as providers from "./providers";
import state from "./state";
import DevTools from "cerebral/devtools";
import oadaProvider from "@oada/cerebral-provider";
import oadaModule from "@oada/cerebral-module";

export default App(
  ({ app }) => {
    app.on("initialized", () => {
      app.getSequence("connect")();
    });
    return {
      modules: {
        oada: oadaModule,
      },
      state,
      sequences,
      providers: {
        oada: oadaProvider,
      },
    };
  },
  {
    devtools: DevTools({
      host: "localhost:8787",
    }),
  },
);
