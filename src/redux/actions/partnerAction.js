import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/partnerApi";
import { toast } from "react-toastify";

export function loadPartners() {
  return function (dispatch) {
    return webApi
      .getPartners()
      .then((partners) => {
        dispatch(loadPartnersSuccess(partners));
      })
      .catch((error) => {
        toast.error("Loading partners failed!");
        throw error;
      });
  };
}

export function loadPartnersSuccess(partners) {
  return {
    type: actionTypes.LOAD_PARTNERS_SUCCESS,
    partners,
  };
}

export function savePartnerSuccess(partner) {
  return { type: actionTypes.SAVE_PARTNER_SUCCESS, partner };
}

export function savePartner(partner) {
  debugger;
  return function (dispatch) {
    return webApi
      .savePartner(partner)
      .then(() => {
        dispatch(savePartnerSuccess(partner));
        toast.success("Partner added successfully!");
      })
      .catch((error) => {
        toast.error("Partner add failed!");
        throw error;
      });
  };
}

export function deletePartnerSuccess(id) {
  return { type: actionTypes.DELETE_PARTNER_SUCCESS, id };
}

export function deletePartner(id) {
  return function (dispatch) {
    return webApi
      .deletePartner(id)
      .then(() => {
        dispatch(deletePartnerSuccess(id));
        toast.success("Partner deleted successfully!");
      })
      .catch((error) => {
        toast.error("Partner delete failed!");
        throw error;
      });
  };
}
