export const currentReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_PROJECT":
      return Object.assign({}, state, { ...action.payload });

    default:
      return state;
  }
};
