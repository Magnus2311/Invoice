import React from "react";
import { toast } from "react-toastify";
import { get, handleError, post } from "../../api/apiUtils";
const baseUrl = "/api/users/";

export async function add(user) {
  const response = await post(baseUrl + "add", user);
  return response.ok;
}

export function login(user) {
  return post(baseUrl + "login", user)
    .then(async response => {
      var isSuccessful = response.status === 200;
      var loginResponse = {
        isSuccessful: isSuccessful,
        token: JSON.parse(await response.text()),
      };
      return loginResponse;
    })
    .then(loginResponse => {
      if (loginResponse.isSuccessful)
        toast.success("You've logged in successfully!");
      else toast.error("Login failed! Check your credentials!");
      return loginResponse.isSuccessful;
    })
    .catch(handleError);
}

export function changePassword(oldPassword, newPassword) {
  return post(baseUrl + "changePassword", { oldPassword, newPassword })
    .then(async response => {
      var isSuccessful = response.status === 200;
      var loginResponse = {
        isSuccessful: isSuccessful,
      };
      return loginResponse;
    })
    .then(loginResponse => {
      debugger;
      if (loginResponse.isSuccessful)
        toast.success("Password changed successfully");
      else toast.error("Password was not changed! Try again later");
      return loginResponse.isSuccessful;
    })
    .catch(handleError);
}

export const resetPassword = (token, newPassword) => {
  return fetch(baseUrl + "resetPassword", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, newPassword }),
  }).then(async response => {
    if (response.status === 200) {
      toast.success("Password changed successfully");
      return true;
    } else {
      toast.error("Password was not changed! Try again later");
      return false;
    }
  });
};

export const resendConfirmationEmail = async user => {
  const response = await post(baseUrl + "sendSecondaryConfirmationEmail", user);
  return response.ok;
};

export function refreshAccessToken() {
  return get(baseUrl + "getAccessToken")
    .then(async response => {
      var isSuccessful = response.status === 200;
      var loginResponse = {
        isSuccessful: isSuccessful,
        token: JSON.parse(await response.text()),
      };
      return loginResponse;
    })
    .catch(handleError)
    .then(loginResponse => loginResponse);
}
