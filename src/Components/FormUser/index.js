import React from "react";

const FormUser = ({ handleSubmit, title, btnSubmitText, login }) => {
  return (
    <Fragment>
      <h2 className="login-title">{title}</h2>
      <form className="login-container-form" action="/home" ref={form}>
        <input
          type="text"
          className="input"
          id="email"
          name="email"
          placeholder="Email"
        />
        {renderErrorMessage("email")}
        <input
          type="password"
          className="input"
          id="password"
          name="password"
          placeholder="Password"
        />
        {renderErrorMessage("password")}
        <button className="button-login" onClick={handleSubmit}>
          {btnSubmitText}
        </button>
      </form>
      <p className="login-container-register">{routerLogin()}</p>
    </Fragment>
  );
};

export { FormUser };
