import { combineReducers } from "redux";
import items from "./itemReducers";

const rootReducer = combineReducers({
  items,
});

export default rootReducer;
