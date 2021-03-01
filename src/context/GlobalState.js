import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  type: 'Business website',
  designType: 'Custom',
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

  function setDesignType(design) {
    dispatch({
      type: 'SELECT_DESIGN',
      payload: design,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        type: state.type,
        selectType,
        designType: state.designType,
        setDesignType,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
