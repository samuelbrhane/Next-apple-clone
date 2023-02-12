import React, { useReducer, createContext, useContext } from "react";

const BagContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case value:
      break;

    default:
      break;
  }
};

const BagContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BagContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BagContext.Provider>
  );
};

const useGlobalContextProvider = () => {
  return useContext(BagContext);
};

export { BagContextProvider, useGlobalContextProvider };
