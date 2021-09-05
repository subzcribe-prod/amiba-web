const loadState = () => {
  if (
    localStorage.user !== undefined &&
    Object.keys(localStorage.user).length > 1
  ) {
    return JSON.parse(localStorage.user);
  }
  return {};
};

export const authReducer = (state = loadState(), action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT_USER":
      return action.payload;
    default:
      return state;
  }
};
