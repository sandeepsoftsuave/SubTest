export const EXTRA_TOKEN = "extraToken";
export const REFRESH_TOKEN = "refreshToken";
export const ID_TOKEN = "idToken";
export const TOKEN_TYPE = "tokenType";
export const EXPIRE = "expire";
export const USERNAME = "username";

export const USER_INFO = "userInfo";

export const API_STAGE = "api";
export const API_LANG = "es";
export const API_TYPE = "invoxapi";
export const API_USER_PROPERTIES = "userproperties";
export const API_OBJ_AGENT = "agent";
export const USER = "user";
export const API_OBJ_FOLDER = "folder";
export const API_OBJ_VIEWER = "viewer";
export const API_USER_PERMISSION = "userpermission";

export const DOMAIN_TYPE = {
  numintec: "Numintec",
  generali: "Generali",
};

export const LOGIN_API_ENPOINT =
  "https://zilumbbkac.execute-api.eu-west-1.amazonaws.com/";

export const API_ENPOINT = "https://apiv2.invoxcontact.com/";
export const GENERALI_API_ENPOINT = "https://apis.generali.invoxcontact.io/";

export const X_API_KEY = "c0rn05wuqo8F8AspQ5mtD5NaPyJ8SIcQ8gUbhovV";
export const GENERALI_X_API_KEY = "NBYZjmSWHC6xx1z6taBGr8h47BOrxdeA1w86E2wX";

export const GENERALI_LOGIN_AUTH2_URL =
  GENERALI_API_ENPOINT + "auth/auth.s2/InvoxAPI";

export const GENERALI_REFRESH_URL =
  GENERALI_API_ENPOINT + "auth/refresh/InvoxAPI";

export const GENERALI_API_ENPOINT_ADDONS = `${GENERALI_API_ENPOINT}${API_STAGE}/${API_LANG}/${API_TYPE}`;
export const GENERALI_USER_PROPERTIES_URL = `${GENERALI_API_ENPOINT_ADDONS}/${API_USER_PROPERTIES}/`;

export const LOGIN_AUTH2_URL = `${LOGIN_API_ENPOINT}auth/auth.s2/InvoxAPI`;
export const REFRESH_URL = `${LOGIN_API_ENPOINT}auth/refresh/InvoxAPI`;

export const API_ENPOINT_ADDONS = `${API_ENPOINT}${API_STAGE}/${API_LANG}/${API_TYPE}`;
export const GET_USER_DATA_URL = `${API_ENPOINT_ADDONS}/${API_USER_PROPERTIES}/`;

export const GET_ADMIN_LIST_URL =
  API_ENPOINT + API_STAGE + "/" + API_LANG + "/" + API_TYPE + "/" + USER;
export const GENERALI_GET_ADMIN_LIST_URL = `${GENERALI_API_ENPOINT_ADDONS}/${USER}`;

export const GET_FOLDER_LIST_URL = `${API_ENPOINT_ADDONS}/${API_OBJ_FOLDER}`;
export const GET_VIEWERS_LIST_URL = `${API_ENPOINT_ADDONS}/${API_OBJ_VIEWER}`;
export const GET_USER_PERMISSION = `${API_ENPOINT_ADDONS}/${API_USER_PERMISSION}/`;

export const GENERALI_GET_FOLDER_LIST_URL = `${GENERALI_API_ENPOINT_ADDONS}/${API_OBJ_FOLDER}`;
export const GENERALI_GET_VIEWERS_LIST_URL = `${GENERALI_API_ENPOINT_ADDONS}/${API_OBJ_VIEWER}`;
export const GENERALI_GET_USER_PERMISSION = `${GENERALI_API_ENPOINT_ADDONS}/${API_USER_PERMISSION}/`;
