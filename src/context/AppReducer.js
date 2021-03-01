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
        E_COMMERCE_designType: action.payload,
      };

    case 'SELECT_LANGUAGE_AMOUNT':
      return {
        ...state,
        E_COMMERCE_languageAmount: action.payload,
      };
    default:
      return state;
  }
};
