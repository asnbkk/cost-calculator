import { act } from 'react-dom/test-utils';

export default (state, action) => {
  switch (action.type) {
    case 'SELECT_TYPE':
      return {
        ...state,
        GENERAL_type: action.payload,
      };

    case 'SELECT_DESIGN':
      return {
        ...state,
        ECW: [
          ...state.ECW.filter((o) => o.type !== 'designType'),
          action.payload,
        ],
      };

    case 'SELECT_LANGUAGE_AMOUNT':
      return {
        ...state,
        ECW: [
          ...state.ECW.filter((o) => o.type !== 'languageAmount'),
          action.payload,
        ],
      };
    default:
      return state;
  }
};
