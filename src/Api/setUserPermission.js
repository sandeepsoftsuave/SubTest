import {
  GET_USER_PERMISSION,
} from "../Utils/constants";
import { postService } from "./postService";

export const setUserPermission = (
  userId = "",
  dashboardPermissions,
  adminPermission,
  autoDialerPermission,
  usersPermission,
  webAgentPermission,
  webPhonePermission,
  successCallback = () => {},
  errorCallback = () => {}
) => {
  const body = {
    admin: adminPermission,
    autodialer: autoDialerPermission,
    dashboard: dashboardPermissions,
    webphone: webPhonePermission,
    users: usersPermission,
    webagent: webAgentPermission,
  };

  const userDataUrl = GET_USER_PERMISSION;
  postService(
    `${userDataUrl}${userId}`,
    JSON.stringify({ data: body }),
    successCallback,
    errorCallback
  );
};
