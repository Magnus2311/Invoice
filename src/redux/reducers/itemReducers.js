import * as actionTypes from "../actions/actionTypes";

export default function itemReducers(items = [], action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_ITEMS_SUCCESS:
      return action.items;
    case actionTypes.SAVE_ITEM_SUCCESS:
      return [...items, { ...action.item }];
    //TO DO
    case actionTypes.DELETE_ITEM_SUCCESS:
      return [...items.filter((item) => item.id !== action.id)];
    default:
      return items;
  }
}
