import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/actions";

const AppInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AppInitializer;
