import React, { useReducer, createContext, useContext } from "react";

const BagContext = createContext();

const initialState = {
  bagItems: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      return { ...state, bagItems: [...state.bagItems, payload] };
    default:
      return state;
  }
};

const BagContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);
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
