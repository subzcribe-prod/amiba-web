export const versionReducer = (
  state = [{ name: null, description: null }],
  action
) => {
  switch (action.type) {
    case "LOAD_VERSIONS":
      return action.payload;
    case "ADD_NEW_VERSION":
      return [...state].concat({ ...action.payload });
    default:
      return state;
  }
};
