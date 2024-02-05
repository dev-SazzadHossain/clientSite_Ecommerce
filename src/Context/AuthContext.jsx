import React, { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../AxiosInstance/AxiosInstance";
import { useQuery } from "react-query";
const registerData = async () => {
  const data = await axiosInstance.get("/api/v1/register");
  return data?.data?.data;
};
export const AuthContextData = createContext();
const AuthContext = ({ children }) => {
  //-------------- get single register user data -------------

  const { data, isError, isLoading, isSuccess, isFetching, refetch } = useQuery(
    ["singleUser"],
    registerData
  );
  //-------------- get single register user data -------------

  // AuthInfo
  const authInfo = { data, isError, isLoading, isFetching, isSuccess, refetch };
  return (
    <AuthContextData.Provider value={authInfo}>
      {children}
    </AuthContextData.Provider>
  );
};

export default AuthContext;
