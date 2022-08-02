import React from "react";
import icon from "../../Assets/Img/logout-24.png";
import "./BtnLogout.css";

const BtnLogout = () => {
  return (
    <button type="button" className="btn-logout">
      <img src={icon} alt="Logout icon" />
      Logout
    </button>
  );
};

export { BtnLogout };
