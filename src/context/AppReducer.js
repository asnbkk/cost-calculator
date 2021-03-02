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
        ECW_designType: action.payload,
      };

    case 'SELECT_LANGUAGE_AMOUNT':
      return {
        ...state,
        ECW_languageAmount: action.payload,
      };
    default:
      return state;
  }
};
