export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT_USER":
      return action.payload;
    default:
      return state;
  }
};
