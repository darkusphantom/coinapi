import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import icon from "../../Assets/Img/logout-24.png";
import "./BtnLogout.css";

const BtnLogout = () => {
  let history = useHistory();
  let auth = useAuth();

  return (
    <button
      type="button"
      className="btn-logout"
      onClick={() => {
        auth.signout(() => {
          history.push("/");
          window.location.reload();
        });
      }}
    >
      <img src={icon} alt="Logout icon" />
      Logout
    </button>
  );
};

export { BtnLogout };
