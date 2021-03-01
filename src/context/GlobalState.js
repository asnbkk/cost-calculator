import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  type: 'Business website',
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function selectType(name) {
    dispatch({
      type: 'SELECT_TYPE',
      payload: name,
    });
  }

  return (
    <GlobalContext.Provider value={{ type: state.type, selectType }}>
      {children}
    </GlobalContext.Provider>
  );
};
