import React, { Fragment, useState } from "react";
import { User } from "../../Assets/Data/user.js";
import "./LoginForm.css";

const LoginForm = () => {
  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: false,
    password: false,
  });

  const onSetEmail = (emailValue) => {
    setUserState({
      ...userState,
      email: emailValue,
    });
  };

  const onSetPassword = (passwordValue) => {
    setUserState({
      ...userState,
      password: passwordValue,
    });
  };

  const onInvalidEmail = (messageState) => {
    setErrorMessage({
      ...errorMessage,
      email: messageState,
    });
  };

  const onInvalidPassword = (messageState) => {
    setErrorMessage({
      ...errorMessage,
      password: messageState,
    });
  };

  const verifyEmail = () => {
    userState.email !== User[0].email
      ? onInvalidEmail(true)
      : onInvalidEmail(false);
  };

  const verifyPassword = () => {
    userState.password !== User[0].password
      ? onInvalidPassword(true)
      : onInvalidPassword(false);
  };

  const onSubmitUser = (event) => {
    verifyEmail();
    verifyPassword();
  };

  return (
    <Fragment>
      <h2 className="login-title">Login</h2>
      <form className="login-container-form" action="">
        <input
          type="text"
          className="input"
          id="email"
          name="email"
          placeholder="Email"
          value={userState.email}
          onChange={(event) => onSetEmail(event.target.value)}
        />

        {errorMessage.email && <p className="message-error">Email invalid</p>}

        <input
          type="password"
          className="input"
          id="password"
          name="password"
          placeholder="Password"
          value={userState.password}
          onChange={(event) => onSetPassword(event.target.value)}
        />

        {errorMessage.password && (
          <p className="message-error">Password invalid</p>
        )}

        <button
          type="button"
          className="button-login"
          onClick={(event) => onSubmitUser(event)}
        >
          Login
        </button>
      </form>
      <p className="login-container-register">
        <a>Register</a>
      </p>
    </Fragment>
  );
};

export { LoginForm };
