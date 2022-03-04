import axios from "axios";
import { handleLogoutRedirect } from "../Utils/commonutils";
import {
   EXPIRE,
   ID_TOKEN,
  TOKEN_TYPE,
  } from "../Utils/constants";
import { APP_API_KEY } from "../Utils/localstore";
import { getItem } from "../Utils/storage";

export const getUserPermission = (
  userPermission,
  successCallback,
  errorCallback
) => {
  const expire = getItem(EXPIRE);
  const idToken = getItem(ID_TOKEN);
  const tokenType = getItem(TOKEN_TYPE);

  const headers = {
    Authorization: tokenType + " " + idToken,
    "x-api-key": APP_API_KEY
  };

  if (expire && Number(expire) * 1000 > Date.now()) {
    axios
      .get(userPermission, { headers })
      .then((response) => {
        successCallback(response.data);
      })
      .catch((error) => {
        errorCallback(error);

        if (error && error.status && error.status.toString() === "401") {
          handleLogoutRedirect();
        }
      });
  } else {
    handleLogoutRedirect();
  }
};
