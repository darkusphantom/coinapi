import React from "react";
import "./ContainerBtc.css";

const ContainerBtc = ({ children }) => {
  return (
    <section className="btc">
      <div className="container-btc">{children}</div>
    </section>
  );
};

export { ContainerBtc };
