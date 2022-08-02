import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { User } from "../Assets/Data/user";
import { useUserLogged } from "./useUserLogged";
import { useAuth } from "./useAuth";

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
  const history = useHistory();
  const location = useLocation();

  const [errorMessages, setErrorMessages] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const auth = useAuth();
  const { updateState } = useUserLogged();
  const { setUserLogged } = updateState;

  const showErrorMessage = (payload) => {
    setErrorMessages({
      name: payload.name,
      message: payload.message,
    });
  };

  const redirection = (direction) => {
    showErrorMessage({ name: "", message: "" });
    setIsSubmitted(true);
    auth.signin(() => {
      history.replace(direction);
      window.location.reload();
    });
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
          setUserLogged(true);
          let { from } = location.state || { from: { pathname: "/home" } };
          console.log(from);

          redirection(from);
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
