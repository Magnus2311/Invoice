import * as actionTypes from "../actions/actionTypes";

export default function partnerReducers(partners = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PARTNERS_SUCCESS:
      return action.partners;
    case actionTypes.SAVE_PARTNER_SUCCESS:
      return [...partners, { ...action.partner }];
    //TO DO - не refresh-ва списъка
    case actionTypes.DELETE_PARTNER_SUCCESS:
      return [...partners.filter((partner) => partner.id !== action.id)];
    default:
      return partners;
  }
}
