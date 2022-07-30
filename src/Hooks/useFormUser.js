import { useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../Assets/Data/user";

const initialState = {
  name: "",
  message: "",
};

const errors = {
  email: "This email is not register",
  emailExist: "This email is register",
  empty: "It's empty",
  password: "Wrong password",
};

const useFormUser = (data) => {
  const [errorMessages, setErrorMessages] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  let history = useHistory();

  const showErrorMessage = (payload) => {
    setErrorMessages({
      name: payload.name,
      message: payload.message,
    });
  };

  const redirection = (direction) => {
    showErrorMessage({ name: "", message: "" });
    setIsSubmitted(true);
    setTimeout(() => {
      history.push(direction);
      window.location.reload();
    }, 2000);
  };

  const verifyUserLogin = (data) => {
    const userData = User.find((user) => user.email === data.email);

    if (data.email.length === 0) {
      showErrorMessage({ name: "email", message: errors.empty });
      return;
    } else {
      if (userData) {
        if (userData.password !== data.password) {
          showErrorMessage({ name: "password", message: errors.password });
          return;
        } else {
          redirection("/home");
        }
      } else {
        showErrorMessage({ name: "email", message: errors.email });
      }
    }
  };

  const verifyUserRegister = (data) => {
    const userData = User.find((user) => user.email === data.email);

    if (data.email.length === 0) {
      showErrorMessage({ name: "email", message: errors.empty });
      return;
    } else {
      if (userData) {
        showErrorMessage({ name: "email", message: errors.emailExist });
        return;
      }

      if (!data.password) {
        showErrorMessage({ name: "password", message: errors.empty });
        return;
      } else {
        redirection("/login");
      }
    }
  };

  return {
    errorMessages,
    showErrorMessage,
    isSubmitted,
    verifyUserLogin,
    verifyUserRegister,
  };
};

export { useFormUser };
