import React from "react";

const ResetPasswordEmailTemplate = () => {
  debugger;
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
        src="cid:{0}"
        alt="InvoiceLogo"
        style={{ width: "200px", height: "200px" }}
      />
      <h3>Reset password for Invoice</h3>
      <div>
        You are receiving this email in order to reset your password. If you
        haven't initiated password reset in{" "}
        <a href="https://invoice.online">Invoice.online</a> please ignore this
        email!
      </div>
      <a
        href={`${window.location.protocol}//${window.location.host}/auth/resetPassword/{1}`}
      >
        Reset password
      </a>
    </div>
  );
};

export default ResetPasswordEmailTemplate;
