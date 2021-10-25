import React from "react";
import FormInput from "../../common/FormInput";

const SearchForCompany = (props) => {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        width: "100%",
      }}
    >
      <FormInput type="text" />
      <img
        src="./img/search.png"
        style={{
          width: "1rem",
          height: "1rem",
          cursor: "pointer",
          position: "absolute",
          right: "0.125rem",
          top: "1.5rem",
        }}
      />
    </div>
  );
};

export default SearchForCompany;
