import React from "react";
import { Route } from "react-router";
import { isAuthenticated } from "../../../services/auth/isAuthenticated";
import AuthenticateBeforeRender from "./AuthenticateBeforeRender";

const AuthenticatedRoute = ({ Component, exact, path }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <AuthenticateBeforeRender render={() => <Component {...props} />} />
      )
    }
  />
);

export default AuthenticatedRoute;
