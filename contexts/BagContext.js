import React, { useReducer, createContext, useContext } from "react";

const BagContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      const findItem = state?.bagItems?.find((item) => item.id === payload.id);
      if (!findItem)
        return {
          ...state,
          bagItems: [...state.bagItems, { ...payload, amount: 1 }],
        };
      return state;

    case "INCREASE_ITEM":
      return {
        ...state,
        bagItems: state.bagItems.map((item) => {
          if (item.id === payload) return { ...item, amount: item.amount + 1 };
          return item;
        }),
      };

    case "DECREASE_ITEM":
      return {
        ...state,
        bagItems: state.bagItems
          .map((item) => {
            if (item.id === payload)
              return { ...item, amount: item.amount - 1 };
            return item;
          })
          .filter((item) => item.amount > 0),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        bagItems: state.bagItems.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

const initialState = {
  bagItems: [],
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
