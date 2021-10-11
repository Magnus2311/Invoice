import React from "react";

const EmailSent = (props) => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "30rem",
        margin: "0 auto",
      }}
    >
      <img
        src="/images/logos/logo_transparent.png"
        alt="LifeModeLogo"
        style={{ width: "200px", height: "200px" }}
      />
      <h3>Confirmation e-mail sent to: {props.match.params.email}</h3>
      <div>You will be able to sign-in as soon as e-mail is confirmed.</div>
    </div>
  );
};

export default EmailSent;