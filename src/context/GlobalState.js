import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  GENERAL: {
    name: 'Business website',
    description: 'Business website',
    price: 500,
    code: 'BW',
  },
  ECW: [
    {
      type: 'ECW_DESIGN',
      name: 'Custom',
      description: 'Custom design',
      price: 450,
    },
    {
      type: 'ECW_LANGUAGE_AMOUNT',
      name: '1',
      description: 'One language',
      price: 200,
    },
    {
      type: 'ECW_STOCK_UNITS_AMOUNT',
      name: '1-1000',
      description: 'Under 1000 stock units',
      price: 700,
    },
    {
      type: 'ECW_REGISTRATION',
      name: 'No',
      description: 'Include registration',
      price: 0,
    },
    { type: 'ECW_PAYMENTS', name: 'No', description: '', price: 0 },
  ],
  BW: [
    { type: 'BW_PURPOSE', name: 'Build trust', description: '', price: 200 },
    { type: 'BW_DESIGN', name: 'Custom', description: '', price: 450 },
    { type: 'BW_BRANDING', name: 'No', description: '', price: 0 },
  ],
  MA: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function selectType(name, description, price, code) {
    dispatch({
      type: 'SELECT_TYPE',
      payload: { name, description, price, code },
    });
  }

  function setState(name, description, price, type) {
    dispatch({
      type,
      payload: { type, name, description, price },
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
