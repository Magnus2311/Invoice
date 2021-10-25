import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/itemApi";
import { toast } from "react-toastify";
import linq from "linq";

export function loadItems(filter) {
  return function (dispatch) {
    return webApi
      .getItems(filter)
      .then((items) => {
        dispatch(loadItemsSuccess(items));
      })
      .catch((error) => {
        toast.error("Loading items failed!");
        throw error;
      });
  };
}

export function loadItemsSuccess(items) {
  return {
    type: actionTypes.LOAD_ITEMS_SUCCESS,
    items,
  };
}

export function saveItemSuccess(item) {
  return { type: actionTypes.SAVE_ITEM_SUCCESS, item };
}

export function saveItem(item) {
  return function (dispatch) {
    return webApi
      .saveItem(item)
      .then(() => {
        dispatch(saveItemSuccess(item));
        toast.success("Item added successfully!");
      })
      .catch((error) => {
        toast.error("Item add failed!");
        throw error;
      });
  };
}

export function deleteItemSuccess(item) {
  return { type: actionTypes.DELETE_ITEM_SUCCESS, item };
}

export function deleteItem(item) {
  return function (dispatch) {
    return webApi
      .deleteItem(item)
      .then(() => {
        dispatch(deleteItemSuccess(item));
        toast.success("Item deleted successfully!");
      })
      .catch((error) => {
        toast.error("Item delete failed!");
        throw error;
      });
  };
}
