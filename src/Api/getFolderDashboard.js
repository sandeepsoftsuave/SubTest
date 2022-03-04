import { handleLogoutRedirect } from "../Utils/commonutils";
import {
  EXPIRE,
  ID_TOKEN,
  TOKEN_TYPE,
} from "../Utils/constants";
import { APP_API_KEY } from "../Utils/localstore";
import { getItem } from "../Utils/storage";

export function getService(url, callback, errorCallBack = null) {
  if (getItem(EXPIRE) && Number(getItem(EXPIRE)) * 1000 > Date.now()) {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: getItem(TOKEN_TYPE) + " " + getItem(ID_TOKEN),
        "x-api-key": APP_API_KEY
      },
    })
      .then((response) => response.json())
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        console.error(error);
        if (error && error.status && error.status.toString() === "401") {
          handleLogoutRedirect();
        }
      });
  } else {
    handleLogoutRedirect();
  }
}
