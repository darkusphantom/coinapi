import { useState, useEffect } from "react";

const useUserLogin = (initialState) => {
  const [isLogged, setIsLogged] = useState(initialState);

  useEffect(() => {
    changeStateLogin();
  }, [isLogged]);

  const changeStateLogin = (state) => {
    setIsLogged(state);
  };

  return { isLogged, changeStateLogin };
};

export { useUserLogin };
