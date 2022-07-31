//import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const initialState = {
  isLogged: false,
};

const useUserLogged = () => {
  const {
    item: userData,
    saveItem: saveUserData,
    getItem: getUserData,
  } = useLocalStorage("USER_V1", initialState);

  // Methods
  const setUserLogged = (userState) => {
    const user = {
      isLogged: userState,
    };
    saveUserData(user);
  };

  // Final Result
  const states = {
    userData,
  };

  const updateState = {
    setUserLogged,
    getUserData,
  };

  return { states, updateState };
};

export { useUserLogged };
