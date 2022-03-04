import {
  GET_USER_DATA_URL,
} from "../Utils/constants";
import { patchService } from "./patchService";

export const updateUserPreference = (
  selectedLanguage = "es",
  existingUserInfo = {},
  username = "",
  successCallback = () => {}
) => {
  const getPreference = () => {
    if (
      existingUserInfo &&
      existingUserInfo.data &&
      existingUserInfo.data.apps &&
      existingUserInfo.data.apps.users
    ) {
      return existingUserInfo.data.apps.users;
    } else {
      return {};
    }
  };

  const body = {
    apps: {
      users: { ...getPreference(), language: selectedLanguage },
    },
  };

  const userDataUrl = GET_USER_DATA_URL;
  patchService(
    `${userDataUrl}${username}`,
    JSON.stringify({ data: body }),
    successCallback
  );
};

export const updateUserTheme = (
  selectedTheme = "Light",
  existingUserInfo = {},
  username = "",
  successCallback = () => {}
) => {
  const getPreference = () => {
    if (
      existingUserInfo &&
      existingUserInfo.data &&
      existingUserInfo.data.apps &&
      existingUserInfo.data.apps.users
    ) {
      return existingUserInfo.data.apps.users;
    } else {
      return {};
    }
  };

  const body = {
    apps: {
      users: { ...getPreference(), theme: selectedTheme },
    },
  };

  patchService(
    `${GET_USER_DATA_URL}${username}`,
    JSON.stringify({ data: body }),
    successCallback
  );
};
