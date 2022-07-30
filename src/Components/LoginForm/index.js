import React, { Fragment, useState, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { User } from "../../Assets/Data/user.js";
import "./LoginForm.css";

const LoginForm = ({ title, btnSubmitText, login }) => {
  //Link router
  const routerLogin = () => {
    return login === "Login" ? (
      <Link to="/login">{login}</Link>
    ) : (
      <Link to="/register">{login}</Link>
    );
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef(null);

  const errors = {
    email: "This email is not register",
    password: "Wrong password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const userData = User.find((user) => user.email === data.email);

    if (userData) {
      if (userData.password !== data.password) {
        setErrorMessages({
          name: "password",
          message: errors.password,
        });
      } else {
        setErrorMessages({});
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({
        name: "email",
        message: errors.email,
      });
    }
  };

  const renderErrorMessage = (nameError) => {
    return (
      nameError === errorMessages.name && (
        <p className="message-error">{errorMessages.message}</p>
      )
    );
  };

  return (
    <Fragment>
      <h2 className="login-title">{title}</h2>
      <form className="login-container-form" action="/home" ref={form}>
        <input
          type="text"
          className="input"
          id="email"
          name="email"
          placeholder="Email"
        />
        {renderErrorMessage("email")}
        <input
          type="password"
          className="input"
          id="password"
          name="password"
          placeholder="Password"
        />
        {renderErrorMessage("password")}
        <button className="button-login" onClick={handleSubmit}>
          {btnSubmitText}
        </button>
      </form>
      <p className="login-container-register">{routerLogin()}</p>
    </Fragment>
  );
};

export { LoginForm };
