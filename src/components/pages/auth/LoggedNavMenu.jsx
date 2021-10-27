import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../common/Contexts/AuthContext";

const LoggedNavMenu = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const handleMyCompanyClick = (e) => {
    history.push("/my-company");
  };

  return (
    authContext.user.username && (
      <>
        <img
          onClick={handleMyCompanyClick}
          src="/img/office-building.png"
          alt="Моята фирма"
          style={{
            width: "32px",
            height: "32px",
            cursor: "pointer",
          }}
        />
        <Link to="/auth/index" className="text-dark nav-link">
          {authContext.user.username.toLowerCase()}
        </Link>
      </>
    )
  );
};

export default LoggedNavMenu;
