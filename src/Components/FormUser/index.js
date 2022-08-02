import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useFormUser } from "../../Hooks/useFormUser";
import "./FormUser.css";

const FormUser = ({ routerName, userDatabase }) => {
  const {
    errorMessages,
    isSubmitted,
    verifyUserLogin,
    verifyUserRegister,
  } = useFormUser({});
  const form = useRef(null);

  const routerLogin = () => {
    const redirectPage = () => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    return routerName !== "login" && routerName !== "Login" ? (
      <Link to="/login" onClick={redirectPage}>
        Login
      </Link>
    ) : (
      <Link to="/register" onClick={redirectPage}>
        Register
      </Link>
    );
  };

  const getFormData = () => {
    const formData = new FormData(form.current);

    return {
      email: formData.get("email"),
      password: formData.get("password"),
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = getFormData();

    if (routerName === "login" || routerName === "Login") {
      verifyUserLogin(data);
    }

    if (routerName === "register" || routerName === "Register") {
      verifyUserRegister(data);
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
    <form className="formUser-container" action="/home" ref={form}>
      <input
        type="text"
        className="input"
        id="email"
        name="email"
        placeholder="Email"
      />
      {renderErrorMessage("email")}
      {renderErrorMessage("emailExist")}
      {renderErrorMessage("empty")}
      <input
        type="password"
        className="input"
        id="password"
        name="password"
        placeholder="Password"
      />
      {renderErrorMessage("password")}
      {renderErrorMessage("empty")}
      <button className="button-form" onClick={handleSubmit}>
        {routerName}
      </button>
      <p className="form-container-router">{routerLogin()}</p>
      {isSubmitted && <p className="message-correct">Everything is fine.</p>}
    </form>
  );
};

export { FormUser };
