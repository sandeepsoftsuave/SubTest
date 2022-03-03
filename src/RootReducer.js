import { combineReducers } from "redux";
import commonReducer from "./Reducers/CommonReducers"

const rootReducer = combineReducers({
  commonReducer: commonReducer,
});

export default rootReducer;
