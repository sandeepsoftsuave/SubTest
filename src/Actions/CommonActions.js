export const setDrawerOpened = (drawerOpened) => {
    return {
      type: "setDrawerOpened",
      payload: drawerOpened,
    };
  };

  export const setShowLanguageModal = (showLanguageModal) => {
    return {
      type: "setShowLanguageModal",
      payload: showLanguageModal,
    };
  };

  export const setAppLanguage = (language) => {
    return {
      type: "setAppLanguage",
      payload: language,
    };
  };

  export const setUserInfo = (info) => {
    return {
      type: "setUserInfo",
      payload: info,
    };
  };