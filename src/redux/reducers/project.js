export const projectReducer = (
  state = [{ name: null, description: null }],
  action
) => {
  switch (action.type) {
    case "ADD_NEW_PROJECT":
      return [...state].concat({ ...action.payload });
    default:
      return state;
  }
};
