export const isUserAuthenticated = (user, history, dispatch) => {
  // check local storage if user is not in redux
  if (!user || Object.keys(user).length === 0) {
    user = localStorage.user;
    // if user in local storage, set redux state
    if (user && JSON.parse(localStorage.user)) {
      user = JSON.parse(user);
      dispatch({ type: "LOGGED_IN_USER", payload: user });
      return true;
    }
    // if user not in local storage redirect to signin page
    else {
      history.push("/signin");
      return false;
    }
  }
};
