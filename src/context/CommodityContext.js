import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./newCommodity.reducer";

const initialState = {
  startYears: [],
  endYears: [],
  data: []
};

const CommodityContext = createContext();

const useNewCommodityContext = () => {
  return useContext(CommodityContext);
}

const NewCommodityProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <CommodityContext.Provider
      value={{
        startYears: state.startYears,
        endYears: state.endYears,
        data: state.data,
        dispatch
      }}
    >
      {children}
    </CommodityContext.Provider>
  )

};

export {
  NewCommodityProvider,
  useNewCommodityContext
}