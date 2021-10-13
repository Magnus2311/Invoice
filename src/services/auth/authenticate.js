import { post, get, handleResponse, handleError } from "../../api/apiUtils";
import React from "react";
import { toast } from "react-toastify";

const baseUrl = "/api/users/";

export const authenticate = () => {
  return fetch(baseUrl + "getUsername")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(handleError);
};

export const sighOut = async () => {
  await post(baseUrl + "logout");
};

export const checkConfirmationToken = (email, token) => {
  return fetch(`${baseUrl}confirmEmail?email=${email}&token=${token}`);
};

export const checkResetPasswordToken = token => {
  return fetch(`${baseUrl}checkResetPassword?token=${token}`, {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => {
    if (response.status === 200) {
      return response.text();
    }
  });
};

export const sendResetPasswordEmail = user => {
  return fetch(baseUrl + "sendResetPasswordEmail", {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(response => {
    if (response.status === 200) {
      toast.success(
        `E-mail to reset your password was sent to ${user.username}`
      );
    }
  });
};
