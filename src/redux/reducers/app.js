const initialState = {
  debug: true,
  loaded: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_STATE':
      return { ...state, loaded: action.payload };
    default:
      return state;
  }
};

export default appReducer;
