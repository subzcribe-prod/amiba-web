export const apiReducer = (
  state = [{ name: null, slug: null, type: null, projectId: null }],
  action
) => {
  switch (action.type) {
    case "ADD_NEW_API":
      return [...state].concat({ ...action.payload });
    default:
      return state;
  }
};
