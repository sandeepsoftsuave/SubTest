import { handleLogoutRedirect } from "../Utils/commonutils";
import {
  EXPIRE,
  ID_TOKEN,
  TOKEN_TYPE,
  
} from "../Utils/constants";
import { APP_API_KEY } from "../Utils/localstore";
import { getItem } from "../Utils/storage";

export const postService = (url, data, callback) => {
  if (getItem(EXPIRE) && Number(getItem(EXPIRE)) * 1000 > Date.now()) {
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: getItem(TOKEN_TYPE) + " " + getItem(ID_TOKEN),
        "Content-Type": "application/json",
        "x-api-key": APP_API_KEY
      },
      body: data,
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
  }
};
