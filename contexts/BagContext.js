import React, { useReducer, createContext, useContext } from "react";

const BagContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      const findItem = state?.bagItems?.find((item) => item.id === payload.id);
      if (!findItem)
        return { ...state, bagItems: [...state.bagItems, payload] };
      return state;

    default:
      return state;
  }
};

const initialState = {
  bagItems: [],
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
