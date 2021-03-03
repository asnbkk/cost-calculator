const Reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_TYPE':
      return {
        ...state,
        GENERAL: action.payload,
      };

    case 'ECW_DESIGN':
    case 'ECW_LANGUAGE_AMOUNT':
    case 'ECW_STOCK_UNITS_AMOUNT':
    case 'ECW_REGISTRATION':
    case 'ECW_PAYMENTS':
      return {
        ...state,
        ECW: [
          ...state.ECW.filter((o) => o.type !== action.payload.type),
          action.payload,
        ],
      };

    case 'BW_PURPOSE':
    case 'BW_DESIGN':
      return {
        ...state,
        BW: [
          ...state.ECW.filter((o) => o.type !== action.payload.type),
          action.payload,
        ],
      };

    default:
      return state;
  }
};

export default Reducer;
