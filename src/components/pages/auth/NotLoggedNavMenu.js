import React from "react";
import { Link } from "react-router-dom";

const NotLoggedNavMenu = () => {
  return (
    <>
      <Link
        tag={Link}
        className="nav-link"
        to="/auth/registration"
        style={{ marginRight: "1rem" }}
      >
        Register
      </Link>
      <Link tag={Link} className="nav-link" to="/auth/login">
        Login
      </Link>
    </>
  );
};

export default NotLoggedNavMenu;
