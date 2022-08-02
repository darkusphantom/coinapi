import React, { Fragment } from "react";
import "./ContainerFormUser.css";

const ContainerFormUser = ({ routerName, children }) => {
  return (
    <Fragment>
      <h2 className="form-title">{routerName}</h2>
      {children}
    </Fragment>
  );
};

export { ContainerFormUser };
