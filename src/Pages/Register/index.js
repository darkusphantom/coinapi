import React from "react";
import { HeaderPage } from "../../Components/HeaderPage";
import { FooterPage } from "../../Components/FooterPage";
import { ContainerFormUser } from "../../Containers/ContainerFormUser";
import { FormUser } from "../../Components/FormUser";
import { User } from "../../Assets/Data/user.js";
import "./Register.css";

const Register = () => {
  return (
    <div className="page-register">
      <HeaderPage />
      <section className="register">
        <section className="register-container">
          <ContainerFormUser routerName="register">
            <FormUser routerName="Register" userDatabase={User} />
          </ContainerFormUser>
        </section>
      </section>
      <FooterPage />
    </div>
  );
};

export { Register };
