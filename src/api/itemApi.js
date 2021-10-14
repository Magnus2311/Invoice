import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/items/";

export function getItems() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveItem(item) {
  debugger;
  return fetch(baseUrl + "add/" + (item.id || ""), {
    method: item.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteItem(itemId) {
  return fetch(baseUrl + itemId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
