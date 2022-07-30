import React from "react";
import { HeaderPage } from "../../Components/HeaderPage";
import { FooterPage } from "../../Components/FooterPage";
import { LoginForm } from "../../Components/LoginForm";
import "./Register.css";

const Register = () => {
  return (
    <div className="page-register">
      <HeaderPage />
      <section className="register">
        <section className="register-container">
          <LoginForm title="Register" btnSubmitText="Register" login="Login" />
        </section>
      </section>
      <FooterPage />
    </div>
  );
};

export { Register };
