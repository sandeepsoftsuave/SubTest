import { getDomain } from "./domain";
import { removeTokens } from "./localstore";

export function getParameterByName(name, url) {
  if (!url) url = window.location.href;

  // eslint-disable-next-line no-useless-escape
  name = name.replace(/[\[\]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return "";

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function handleLogoutRedirect(redirectUrl = null) {
  const domain = getDomain();
  const redirectTo = redirectUrl || `${domain}/permissions/`;

  removeTokens();
  window.location = `${domain}/login/?redirect=${redirectTo}`;
}

export const handleWrongPasswordLogout = () => {
  const domain = getDomain();

  removeTokens();
  window.location = `${domain}/login/?redirect=${domain}/permissions/&loginerror=1`;
};
