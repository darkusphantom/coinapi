import React, { Fragment } from "react";
import { HeaderPage } from "../../Components/HeaderPage";
import { FooterPage } from "../../Components/FooterPage";
import loader from "../../Assets/Img/rolling-cat-cat-rolling.webp";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Fragment>
      <HeaderPage />
      <div className="container-error">
        <div className="container">
          <img src={loader} alt="rolling cat" loading="lazy" width="80%" />
          <p className="error-title">Error Not Found</p>
          <p className="error-message">Enjoy this cat</p>
        </div>
      </div>
      <FooterPage />
    </Fragment>
  );
};

export { NotFound };
