const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
