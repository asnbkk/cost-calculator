import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  GENERAL: { name: 'Business website', price: 500, code: 'BW' },
  ECW: [
    { type: 'DESIGN', name: 'Custom', price: 450 },
    { type: 'LANGUAGE_AMOUNT', name: '1', price: 200 },
    { type: 'STOCK_UNITS_AMOUNT', name: '1-1000', price: 700 },
    { type: 'REGISTRATION', name: 'No', price: 0 },
  ],
  BW: [],
  MA: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function selectType(name, price, code) {
    dispatch({
      type: 'SELECT_TYPE',
      payload: { name, price, code },
    });
  }

  function setState(name, price, type) {
    dispatch({
      type,
      payload: { type, name, price },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        type: state.GENERAL,
        ECW: state.ECW,
        BW: state.BW,
        MA: state.MA,
        selectType,
        setState,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
