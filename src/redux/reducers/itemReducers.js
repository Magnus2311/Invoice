import * as actionTypes from "../actions/actionTypes";

export default function itemReducers(items = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS_SUCCESS:
      return action.items;
    case actionTypes.SAVE_ITEM_SUCCESS:
      return [...items, { ...action.item }];
    default:
      return items;
  }
}
