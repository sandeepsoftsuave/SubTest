import axios from "axios";
import { handleLogoutRedirect } from "../Utils/commonutils";
import {
  REFRESH_TOKEN,
  REFRESH_URL,
} from "../Utils/constants";
import { APP_API_KEY } from "../Utils/localstore";
import { getItem } from "../Utils/storage";

export const refreshAuthValues = (successCallback, errorCallback) => {
  const url = REFRESH_URL;
  const body = { RefreshToken: getItem(REFRESH_TOKEN) };
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": APP_API_KEY
  };

  axios
    .put(url, body, { headers })
    .then((response) => {
      successCallback(response.data);
    })
    .catch((error) => {
      errorCallback(error);
      if (error && error.status && error.status.toString() === "401") {
        handleLogoutRedirect();
      }
    });
};
