import React, { useState } from "react";
import * as usersDb from "../../../services/users/usersDbService";
import FormText from "../../common/FormText";
import * as emailService from "../../../services/helpers/emailsService";
import ConfirmationEmailTemplate from "../templates/emails/ConfirmationEmailTemplate";
import ReactDomServer from "react-dom/server";
import { toast } from "react-toastify";

const Registration = ({ history }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPasswordMatching, setIsPasswordMatching] = useState(true);
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    changeIsRegisterActive(e.target.name, e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "" && confirmPassword === "")
      setIsPasswordMatching(true);
    changeIsRegisterActive(e.target.name, e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsPasswordMatching(e.target.value === password);
    changeIsRegisterActive(e.target.name, e.target.value);
  };

  const changeIsRegisterActive = (propName, propValue) => {
    switch (propName) {
      case "username":
        const isEmail = emailService.isValidEmail(propValue);
        setIsValidEmail(isEmail);
        setIsRegisterActive(
          propValue &&
            propValue !== "" &&
            isEmail &&
            password &&
            password !== "" &&
            isPasswordMatching
        );
        break;
      case "password":
        setIsRegisterActive(
          propValue &&
            confirmPassword &&
            propValue === confirmPassword &&
            isValidEmail
        );
        break;
      case "confirmPassword":
        setIsRegisterActive(
          propValue &&
            password &&
            propValue === password &&
            username !== "" &&
            isValidEmail
        );
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const template = <ConfirmationEmailTemplate username={username} />;
    const userToInsert = {
      createdDate: new Date(),
      password: password,
      username: username,
      template: ReactDomServer.renderToStaticMarkup(template),
    };
    if (await usersDb.add(userToInsert)) {
      history.push(`/auth/emailsent/${username}`);
    } else {
      setPassword("");
      setConfirmPassword("");
      setIsRegisterActive(false);
      toast.error("Registration failed! Please try again later!");
    }
  };

  return (
    <>
      <img
        alt="Invoice logo"
        src="/img/invoice.png"
        style={{ height: "5rem", width: "5rem", alignSelf: "baseline" }}
      />
      <h3>Let's get started</h3>
      <h5>Sign up for free and get a lot of perks!</h5>
      <form onSubmit={handleSubmit} className="add-form">
        <FormText
          handleChange={handleUsernameChange}
          value={username}
          label="E-mail"
          name="username"
          placeholder="Enter your email"
          type="email"
          autoFocus
          isValid={isValidEmail}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            columnGap: "0.75rem",
          }}
        >
          <FormText
            handleChange={handlePasswordChange}
            value={password}
            label="Password"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          <FormText
            handleChange={handleConfirmPasswordChange}
            value={confirmPassword}
            label="Confirm password"
            name="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            isValid={isPasswordMatching}
          />
        </div>
        <button
          className="btn btn-primary btn-xl"
          style={{ width: "100%" }}
          disabled={!isRegisterActive}
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Registration;
