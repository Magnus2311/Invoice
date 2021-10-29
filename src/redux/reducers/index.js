import { combineReducers } from "redux";
import items from "./itemReducers";
import partners from "./partnerReducers";

const rootReducer = combineReducers({
  items,
  partners,
});

export default rootReducer;
