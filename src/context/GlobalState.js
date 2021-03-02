import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  GENERAL_type: { name: 'Business website', price: 500, code: 'BW' },
  ECW: [
    { type: 'designType', name: 'Custom', price: 450 },
    { type: 'languageAmount', name: '1', price: 200 },
  ],
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

  function setDesignType(name, price) {
    dispatch({
      type: 'SELECT_DESIGN',
      payload: { type: 'designType', name, price },
    });
  }

  function setLanguageAmount(name, price) {
    dispatch({
      type: 'SELECT_LANGUAGE_AMOUNT',
      payload: { type: 'languageAmount', name, price },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        type: state.GENERAL_type,
        selectType,
        ECW: state.ECW,
        setDesignType,
        setLanguageAmount,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
