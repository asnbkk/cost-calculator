import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  GENERAL_type: 'Business website',
  E_COMMERCE_designType: 'Custom',
  E_COMMERCE_languageAmount: '1',
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function selectType(type) {
    dispatch({
      type: 'SELECT_TYPE',
      payload: type,
    });
  }

  function setDesignType(design) {
    dispatch({
      type: 'SELECT_DESIGN',
      payload: design,
    });
  }

  function setLanguageAmount(amount) {
    dispatch({
      type: 'SELECT_LANGUAGE_AMOUNT',
      payload: amount,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        type: state.GENERAL_type,
        selectType,
        designType: state.E_COMMERCE_designType,
        setDesignType,
        languageAmount: state.E_COMMERCE_languageAmount,
        setLanguageAmount,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
