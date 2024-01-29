import React, { createContext } from "react";
export const UsersContext = createContext();
const UsersContextProvider = ({ children }) => {
  const values = {};
  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
