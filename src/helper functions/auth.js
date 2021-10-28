export const handleLogout = (history) => {
  localStorage.removeItem("user");
  history.push("/signin");
};

export const handleLogin = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const isAuthenticated = () => {
  return Boolean(localStorage.getItem("user"));
};

export const getAuthenticatedUser = () => {
  return isAuthenticated() ? JSON.parse(localStorage.user) : null;
};

export const updateAuthenticatedUser = (prop, value) => {
  let user = getAuthenticatedUser();
  if (!isAuthenticated()) return;
  user[prop] = value;
  localStorage.setItem("user", JSON.stringify(user));
};
