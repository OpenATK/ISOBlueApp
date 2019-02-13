import { Controller } from "cerebral";
import root from "./modules/root";
import Devtools from "cerebral/devtools";

export default Controller(root, {
  devtools:
    process.env.NODE_ENV === "production"
      ? null
      : Devtools({ host: "localhost:8787" }),
  //devtools: null,
});
