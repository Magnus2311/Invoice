import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/itemApi";
import { toast } from "react-toastify";

export function loadItems() {
  return function (dispatch) {
    return webApi
      .getItems()
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

export function deleteItemSuccess(id) {
  return { type: actionTypes.DELETE_ITEM_SUCCESS, id };
}

export function deleteItem(id) {
  return function (dispatch) {
    return webApi
      .deleteItem(id)
      .then(() => {
        dispatch(deleteItemSuccess(id));
        toast.success("Item deleted successfully!");
      })
      .catch((error) => {
        toast.error("Item delete failed!");
        throw error;
      });
  };
}
