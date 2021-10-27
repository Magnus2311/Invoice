import { string } from "prop-types";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/items";

export function getItems() {
  // var url = new URL("https://localhost:44398/api/items/all"),
  //   params = {
  //     name: filter.name,
  //     code: filter.code,
  //     measure: filter.measure,
  //     account: filter.account,
  //     fromAmount: filter.fromAmount === string.empty ? null : filter.fromAmount,
  //     toAmount: filter.toAmount === string.empty ? null : filter.toAmount,
  //   };
  // Object.keys(params).forEach((key) =>
  //   url.searchParams.append(key, params[key])
  // );
  // // ${window.location.protocol}//${window.location.host}

  return fetch(baseUrl + "/all")
    .then(handleResponse)
    .catch(handleError);
}

export function saveItem(item) {
  return fetch(baseUrl + "/add/" + (item.id || ""), {
    method: item.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteItem(item) {
  return fetch(baseUrl, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}
