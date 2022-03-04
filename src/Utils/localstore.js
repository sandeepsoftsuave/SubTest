import { refreshAuthValues } from "../Api/refreshapi";
import {
  DOMAIN_TYPE,
  EXPIRE,
  EXTRA_TOKEN,
  ID_TOKEN,
  REFRESH_TOKEN,
  TOKEN_TYPE,
  USER_INFO,
} from "./constants";
import { getItem, removeItem, setItem } from "./storage";

let refreshTokenTimeoutID = 0;
let domainType = DOMAIN_TYPE.numintec;

export let APP_API_KEY = "";

export function setAppAPIKey(key) {
  APP_API_KEY = key;
}

export function getDomainType() {
  return domainType;
}

export function setDomainType(type) {
  domainType = type;
}

export function storeUserInfo(info) {
  setItem(USER_INFO, JSON.stringify(info));
}

export const removeTokens = () => {
  removeItem(REFRESH_TOKEN);
  removeItem(EXTRA_TOKEN);
  removeItem(ID_TOKEN);
  removeItem(TOKEN_TYPE);
  removeItem(EXPIRE);
};

const onRefreshError = () => {
  console.error("Refresh Token - Request Failed");
};

export const refreshTokens = () => {
  refreshAuthValues(setTokens, onRefreshError);
};

export const setTimeoutForRefreshToken = () => {
  const expire = getItem(EXPIRE);

  if (!(expire && Number(expire) * 1000 > Date.now())) {
    return;
  }

  clearTimeout(refreshTokenTimeoutID);

  refreshTokenTimeoutID = setTimeout(() => {
    refreshTokens();
  }, Number(expire) * 1000 - Date.now());
};

export const setTokens = (tokenObject) => {
  if (tokenObject.hasOwnProperty("RefreshToken")) {
    setItem(REFRESH_TOKEN, tokenObject.RefreshToken);
    setItem(EXTRA_TOKEN, tokenObject.ExtraToken);
    setItem(ID_TOKEN, tokenObject.IdToken);
    setItem(TOKEN_TYPE, tokenObject.TokenType);
    setItem(EXPIRE, tokenObject.Expire);

    setTimeoutForRefreshToken();
  }
};
