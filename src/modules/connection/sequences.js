/* cerebral imports */
import { state, props } from "cerebral/tags";
import { set } from "cerebral/operators";
import oada from "@oada/cerebral-module/sequences";
import * as data from "../data/sequences";
import * as snapshots from "../snapshots/sequences";

const _SCOPE = "oada.isoblue:all";
const _OPENATK_METADATA =
  "eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vb3BlbmF0ay5jb20vSVNPQmx1ZUFwcC9vYXV0aDIvcmVkaXJlY3QuaHRtbCIsImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9vYXV0aDIvcmVkaXJlY3QuaHRtbCJdLCJ0b2tlbl9lbmRwb2ludF9hdXRoX21ldGhvZCI6InVybjppZXRmOnBhcmFtczpvYXV0aDpjbGllbnQtYXNzZXJ0aW9uLXR5cGU6and0LWJlYXJlciIsImdyYW50X3R5cGVzIjpbImF1dGhvcml6YXRpb25fY29kZSJdLCJyZXNwb25zZV90eXBlcyI6WyJ0b2tlbiIsImNvZGUiLCJpZF90b2tlbiIsImlkX3Rva2VuIHRva2VuIiwiY29kZSBpZF90b2tlbiIsImNvZGUgdG9rZW4iLCJjb2RlIGlkX3Rva2VuIHRva2VuIl0sImNsaWVudF9uYW1lIjoiSVNPQmx1ZSBIZWFsdGggTW9uaXRvciIsImNsaWVudF91cmkiOiJodHRwOi8vb2FkYS5vcGVuYXRrLmNvbS9JU09CbHVlQXBwIiwiY29udGFjdHMiOlsiU2FtIE5vZWwgPHNhbm9lbEBwdXJkdWUuZWR1PiJdLCJqd2tzIjp7ImtleXMiOlt7Imt0eSI6IlJTQSIsIm4iOiJ6YXVaRkJ1TWRsdjFrWWp6VWI0cS1fM200c21GeG5mdzRTWW9hSHE3Y2k4U2N0WTN4ajdyZEFIeWtRcG5RVnJqNktPOG1hSHYtMEJ2VzVNaGNnaXZrdVlzLXpIRXZmWUJlVkJuY3ZIZ09rSlBiYzkxQ3dfaXdPWTdFSFdCOGhNN1ZpTFFWY19EdjBoOG5KeWJCdmhMMDRDSFF0N0NwTXRWWUc2Zm9KWGMzZHE1MmpOUWJCSElaNW03VnoxS3R5em9MY3A4TzJtaGFMcDQ1VXIzQ18xZUd0djhuNU56OWJXX0JoNVhGWWJEeHY3Qm5oWk5JdzFHQ2JqakF3bXRibm5MN0dnZjRDeTYwd1JIbVI0dm9lMjFPSWpvQVNxMmpaMDN4MTJtWHM3SFBJM1lCNHkyOXd2Wk13MmdMek9kVG9ycnFPLXRsbW4xYm9Qa1dLSkpTWG9BdnciLCJlIjoiQVFBQiJ9XX0sInNvZnR3YXJlX2lkIjoiNzY1ZjFlZjctMzExNy00NjhhLTgwYjMtMDExYzQ1MjhkMGExIiwicmVnaXN0cmF0aW9uX3Byb3ZpZGVyIjoiaHR0cHM6Ly9pZGVudGl0eS5vYWRhLWRldi5jb20iLCJpYXQiOjE1NDcxNDYxOTF9.seH7eMsR1218IgEEbiq3T5ASGQAr7vqvy54_Yu8-6TIoAoVfslG-dSYWE2dXZ_P65kElqCKZLizVxyR1732vcFnOdzp6jE_pgpLg-eWZfVnIvNQdGK8Dh-5t1gVbPs1ME-j_GMCb2Un-mpDS8LAw4Nig_r-monjKyKbcPBN6gc4";

const _REDIRECT_OPENATK = "https://openatk.com/ISOBlueApp/oauth2/redirect.html"; // for production
const _REDIRECT_LOCALHOST = "http://localhost:8000/oauth2/redirect.html"; // for local test

const _CURRENT_METADATA = _OPENATK_METADATA;
const _CURRENT_REDIRECT =
  process.env.NODE_ENV === "production"
    ? _REDIRECT_OPENATK
    : _REDIRECT_LOCALHOST;

export var signOut = [
  set(state`Connections.oada_token`, ""),
  set(state`Connections.oada_domain`, ""),
  set(state`Connections.oada_fields_domain`, ""),
  set(state`Connections.oada_domain_text`, ""),
  set(state`Connections.oada_fields_domain_text`, ""),
];

export var updateOadaDomain = [
  set(state`connection.oada_domain_text`, props`value`),
];

export var connect = [
  ({ state }) => ({
    domain: state.get("connection.oada_domain"),
    options: {
      redirect: _CURRENT_REDIRECT,
      metadata: _CURRENT_METADATA,
      scope: _SCOPE,
    },
    //    connection_id: state.get("operations.connection_id"),
    //    signals: ["fields.handleWatchUpdate"],
  }),
  oada.connect,
  set(state`data.connection_id`, props`connection_id`), // FIXME: remove this line
  set(state`connection.connection_id`, props`connection_id`),
  set(state`connection.dialog_open`, false),
];

export var setConnection = [
  set(state`connection.oada_domain`, state`connection.oada_domain_text`),
  connect,
  data.init,
  snapshots.createSnapshots,
];

function clearConnection({ state, props }) {
  const connection_id = state.get("connection.connection_id");
  /* cleaning up connections from oada state */
  state.unset("oada.connections");
  /* cleaning up previous connection_id from oada state */
  state.unset("oada." + connection_id);
}
