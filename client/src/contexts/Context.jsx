import React, { createContext, useReducer } from "react";
import { usersInitialState, usersReducer } from "../reducers/userReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    usersInitialState
  );

  return (
    <DataContext.Provider
      value={{
        usersState,
        usersDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
