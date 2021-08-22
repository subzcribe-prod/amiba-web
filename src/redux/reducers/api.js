export const apiReducer = (
  state = [{ name: null, endpoint: null, status: null }],
  action
) => {
  switch (action.type) {
    case "ADD_NEW_API":
      return [...state].concat({ ...action.payload });
    default:
      return state;
  }
};
