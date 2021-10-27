const baseUrl = "/api/companies/search-by-bulstat";

export const searchByBulstat = bulstat => {
  return fetch(`${baseUrl}/${bulstat}`, {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
