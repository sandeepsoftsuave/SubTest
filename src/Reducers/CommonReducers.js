const init = { drawerOpened: false,
  showLanguageModal: false, 
  appLanguage: "en",
  userInfo: {},
} 
 
const commonReducer = (state = init, action) => {
 switch (action.type) {
   case "setDrawerOpened":
     return {
       ...state,
       drawerOpened: action.payload,
     };   
     case "setShowLanguageModal":
      return {
        ...state,
        showLanguageModal: action.payload,
      };
     case "setAppLanguage":
        return {
          ...state,
          appLanguage: action.payload,
        };
     case "setUserInfo":
          return {
            ...state,
            userInfo: action.payload,
          };
   default:
     return state;
 }
};
export default commonReducer;
