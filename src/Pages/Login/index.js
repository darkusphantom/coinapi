import React from "react"
import { HeaderPage } from '../../Components/HeaderPage'
import { FooterPage } from '../../Components/FooterPage'
import { LoginForm } from '../../Components/LoginForm'
import "./Login.css"

const Login = () => {
  return (
  <div className="page-login">
    <HeaderPage />
    <section className="login">
      <section className="login-container">
      <LoginForm />
     </section>
    </section>
    <FooterPage />
  </div>
  )
}

export { Login };
