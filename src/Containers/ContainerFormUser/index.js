import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ContainerFormUser.css";

const ContainerFormUser = ({ routerName, children }) => {
  const routerLogin = () => {
    const redirectPage = () => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    return routerName !== "login" ? (
      <Link to="/login" onClick={redirectPage}>
        Login
      </Link>
    ) : (
      <Link to="/register" onClick={redirectPage}>
        Register
      </Link>
    );
  };

  return (
    <Fragment>
      <h2 className="form-title">{routerName}</h2>
      {children}
      <p className="form-container-router">{routerLogin()}</p>
    </Fragment>
  );
};

export { ContainerFormUser };
