import React, { useContext } from "react";

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContextData } from "../Context/AuthContext";

const LoginUser = () => {
  const { data, isLoading, refetch } = useContext(AuthContextData);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return data?.email ? <Outlet /> : <Navigate to="/login" />;
};
const NotLogInUssr = () => {
  const { data, isLoading } = useContext(AuthContextData);
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return data?.email ? <Navigate to="/home" /> : <Outlet />;
};

export { LoginUser, NotLogInUssr };
