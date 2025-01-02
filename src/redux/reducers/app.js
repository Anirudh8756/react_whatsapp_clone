const initialState = {
  debug: true,
  loaded: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_STATE':
      return { ...state, ...action.state };
    default:
      return state;
  }
};

export default appReducer;
