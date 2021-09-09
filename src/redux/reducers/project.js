export const projectReducer = (state = null, action) => {
  switch (action.type) {
    case "LOAD_PROJECTS":
      return action.payload;

    case "ADD_NEW_PROJECT":
      return [...state].concat({ ...action.payload });

    default:
      return state;
  }
};
