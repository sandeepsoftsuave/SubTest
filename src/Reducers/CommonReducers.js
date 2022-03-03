const init = { drawerOpened: false } 
 
const commonReducer = (state = init, action) => {
 switch (action.type) {
   case "setDrawerOpened":
     return {
       ...state,
       drawerOpened: action.payload,
     };   
   default:
     return state;
 }
};
export default commonReducer;
