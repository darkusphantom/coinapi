import React from "react";
import { authContext } from "../Context/authContext";
import { useProvideAuth } from "../Hooks/useProvideAuth";

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export { ProvideAuth };
