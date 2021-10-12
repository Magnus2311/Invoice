import React, { useEffect, useState } from "react";
import { checkConfirmationToken } from "../../../services/auth/authenticate";
import * as usersDb from "../../../services/users/usersDbService";
import ConfirmationEmailTemplate from "../templates/emails/ConfirmationEmailTemplate";
import ReactDomServer from "react-dom/server";
import Login from "./Login";

const EmailConfirmationPage = props => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isResponded, setIsResponded] = useState(false);
  const { email, token } = props.match.params;

  const handleSendNew = async e => {
    e.preventDefault();
    const template = <ConfirmationEmailTemplate username={email} />;
    const userToInsert = {
      createdDate: new Date(),
      password: "",
      username: email,
      template: ReactDomServer.renderToStaticMarkup(template),
    };
    if (await usersDb.resendConfirmationEmail(userToInsert)) {
      props.history.push(`/auth/emailsent/${email}`);
    }
  };

  let content;

  if (!isCorrect && !isResponded) {
    content = <>LOADING...</>;
  } else if (!isCorrect && isResponded) {
    content = (
      <>
        <div>
          <div>Your link has expired!</div>
          <button onClick={handleSendNew}>Send New</button>
        </div>
      </>
    );
  } else {
    content = <Login email={email} isConfirmation={true} />;
  }

  useEffect(() => {
    debugger;
    checkConfirmationToken(email, token)
      .then(response => {
        if (response.ok) {
          setIsCorrect(true);
          setIsResponded(true);
        } else {
          setIsResponded(true);
        }
      })
      .catch(() => {
        setIsResponded(true);
      });
  }, [email, token]);
  return <>{content}</>;
};

export default EmailConfirmationPage;
