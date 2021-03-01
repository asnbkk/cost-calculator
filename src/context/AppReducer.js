export default (state, action) => {
  switch (action.type) {
    case 'SELECT_TYPE':
      return {
        ...state,
        type: action.payload,
      };

    case 'SELECT_DESIGN':
      return {
        ...state,
        designType: action.payload,
      };

    default:
      return state;
  }
};
