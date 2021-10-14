import { combineReducers } from "redux";
import item from "./itemReducers";

const rootReducer = combineReducers({
  item,
});

export default rootReducer;
