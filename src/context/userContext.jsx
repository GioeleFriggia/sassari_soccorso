import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions"; // Assicurati che il percorso sia corretto

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [contextUser, setContextUser] = useState(null);
  const { user } = useSelector((state) => state.auth || { user: null });

  useEffect(() => {
    setContextUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user: contextUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
