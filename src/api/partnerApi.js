import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/partners";

export function getPartners() {
  return fetch(baseUrl + "/all")
    .then(handleResponse)
    .catch(handleError);
}

export function savePartner(partner) {
  debugger;
  return fetch(baseUrl + "/add/" + (partner.id || ""), {
    method: partner.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(partner),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePartner(id) {
  return fetch(baseUrl + "?id=" + id, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  }).catch(handleError);
}
