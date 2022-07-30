import React from "react";
import { HeaderPage } from "../../Components/HeaderPage";
import { FooterPage } from "../../Components/FooterPage";
import { ContainerFormUser } from "../../Containers/ContainerFormUser";
import { FormUser } from "../../Components/FormUser";
import { User } from "../../Assets/Data/user.js";
import "./Login.css";

const Login = () => {
  return (
    <div className="page-login">
      <HeaderPage />
      <section className="login">
        <section className="login-container">
          <ContainerFormUser routerName="login">
            <FormUser routerName="Login" userDatabase={User} />
          </ContainerFormUser>
        </section>
      </section>
      <FooterPage />
    </div>
  );
};

export { Login };
