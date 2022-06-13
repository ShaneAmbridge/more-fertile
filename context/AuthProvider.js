import { createContext } from "react";
import useModal from "../hooks/useModal";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const data = useModal();
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
