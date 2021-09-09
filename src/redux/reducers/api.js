export const apiReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_NEW_API":
      return Object.assign({}, state, { ...action.payload });

    case "LOAD_APIS":
      return { ...action.payload };

    default:
      return state;
  }
};
