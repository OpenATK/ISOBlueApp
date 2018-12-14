import { sequence } from 'cerebral';

import * as snapshots from '../snapshots/sequences';
import * as data from '../data/sequences';


const _DEV_DOMAIN = "https://128.46.71.204";
const _LOCALHOST_REDIRECT = "http://localhost:8000/oauth2/redirect.html";
const _OPENATK_DOMAIN = "https://oada.openatk.com";
const _OPENATK_REDIRECT = "https://openatk.com/ISOBlueApp/oauth2/redirect.html";

/* localhost */
let _CURRENT_DOMAIN = _DEV_DOMAIN;
let _CURRENT_REDIRECT = _LOCALHOST_REDIRECT;

/* OpenATK.com */
//let _CURRENT_DOMAIN = _OPENATK_DOMAIN;
//let _CURRENT_REDIRECT = _OPENATK_REDIRECT;

//This metadata from the rockapp. This won't work deployed to openatck.com
let _METADATA = "eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vb3BlbmF0ay5jb20vVGhlUm9ja0FwcC9vYXV0aDIvcmVkaXJlY3QuaHRtbCIsImh0dHBzOi8vamFmaWVjaHQuZ2l0aHViLmlvL3JvY2thcHBfMS9vYXV0aDIvcmVkaXJlY3QuaHRtbCIsImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9vYXV0aDIvcmVkaXJlY3QuaHRtbCJdLCJ0b2tlbl9lbmRwb2ludF9hdXRoX21ldGhvZCI6InVybjppZXRmOnBhcmFtczpvYXV0aDpjbGllbnQtYXNzZXJ0aW9uLXR5cGU6and0LWJlYXJlciIsImdyYW50X3R5cGVzIjpbImF1dGhvcml6YXRpb25fY29kZSJdLCJyZXNwb25zZV90eXBlcyI6WyJ0b2tlbiIsImNvZGUiLCJpZF90b2tlbiIsImlkX3Rva2VuIHRva2VuIiwiY29kZSBpZF90b2tlbiIsImNvZGUgdG9rZW4iLCJjb2RlIGlkX3Rva2VuIHRva2VuIl0sImNsaWVudF9uYW1lIjoiT3BlbkFUSyIsImNsaWVudF91cmkiOiJodHRwOi8vb3BlbmF0ay5jb20iLCJjb250YWN0cyI6WyJKZWZmIEZpZWNodGVyIDxqYWZpZWNodEBwdXJkdWUuZWR1PiJdLCJqd2tzIjp7ImtleXMiOlt7Imt0eSI6IlJTQSIsIm4iOiJ6YXVaRkJ1TWRsdjFrWWp6VWI0cS1fM200c21GeG5mdzRTWW9hSHE3Y2k4U2N0WTN4ajdyZEFIeWtRcG5RVnJqNktPOG1hSHYtMEJ2VzVNaGNnaXZrdVlzLXpIRXZmWUJlVkJuY3ZIZ09rSlBiYzkxQ3dfaXdPWTdFSFdCOGhNN1ZpTFFWY19EdjBoOG5KeWJCdmhMMDRDSFF0N0NwTXRWWUc2Zm9KWGMzZHE1MmpOUWJCSElaNW03VnoxS3R5em9MY3A4TzJtaGFMcDQ1VXIzQ18xZUd0djhuNU56OWJXX0JoNVhGWWJEeHY3Qm5oWk5JdzFHQ2JqakF3bXRibm5MN0dnZjRDeTYwd1JIbVI0dm9lMjFPSWpvQVNxMmpaMDN4MTJtWHM3SFBJM1lCNHkyOXd2Wk13MmdMek9kVG9ycnFPLXRsbW4xYm9Qa1dLSkpTWG9BdnciLCJlIjoiQVFBQiJ9XX0sInNvZnR3YXJlX2lkIjoiNmExNDFjODgtMDdhZC00M2M4LWIyMjEtYTU0MDkzMGJjMzFmIiwicmVnaXN0cmF0aW9uX3Byb3ZpZGVyIjoiaHR0cHM6Ly9pZGVudGl0eS5vYWRhLWRldi5jb20iLCJpYXQiOjE1MzQyNzk0MjJ9.hf9lLNxSY75R4MOXaUjgYZaYQqNunrUQhKV068Yk2azluGpKoBnDr8Ljn1U4Cdg39LBHzwARnL97TC3drjNCqKl-WU2-DLH5xY6wLgve7iR28ZllntFf_RXmFc5vJnYf0l6MPv7ukCJz0XBrXmBu7X1siSBpg8Rz4aIqelrLM28";


export const init = sequence("init", [
  ({}) => ({
    domain: _CURRENT_DOMAIN,
    options: {
      redirect: _CURRENT_REDIRECT,
      metadata: _METADATA,
      scope: 'oada.isoblue.data:all'
    },
  }),
  data.init,
  snapshots.createSnapshots,
]);

