import { useContext } from "react";
import { authContext } from "../Context/authContext";

const useAuth = () => useContext(authContext);

export { useAuth };
