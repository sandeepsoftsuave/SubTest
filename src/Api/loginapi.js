import axios from "axios";
import { handleLogoutRedirect } from "../Utils/commonutils";
import {
  LOGIN_AUTH2_URL
} from "../Utils/constants";
import { APP_API_KEY } from "../Utils/localstore";

export const authenticateUser = (token, successCallback, errorCallback) => {
  const url = LOGIN_AUTH2_URL;
  const body = { code: token };
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
