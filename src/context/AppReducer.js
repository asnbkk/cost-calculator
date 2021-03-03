const Reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_TYPE':
      return {
        ...state,
        GENERAL: action.payload,
      };

    case 'DESIGN':
    case 'LANGUAGE_AMOUNT':
    case 'STOCK_UNITS_AMOUNT':
    case 'REGISTRATION':
      return {
        ...state,
        ECW: [
          ...state.ECW.filter((o) => o.type !== action.payload.type),
          action.payload,
        ],
      };

    // case 'LANGUAGE_AMOUNT':
    //   return {
    //     ...state,
    //     ECW: [
    //       ...state.ECW.filter((o) => o.type !== action.payload.type),
    //       action.payload,
    //     ],
    //   };

    default:
      return state;
  }
};

export default Reducer;
