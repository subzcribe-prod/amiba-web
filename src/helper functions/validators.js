const errors = {
  empty: "Must not be empty",
};

const isEmpty = (string) => {
  return string === undefined || string === null || string.trim() === "";
};

exports.validateName = (name) => {
  if (isEmpty(name)) return errors.empty;
  return null;
};

exports.validateEmail = (email) => {
  if (isEmpty(email)) return errors.empty;
  return null;
};

exports.validateUsername = (username) => {
  if (isEmpty(username)) return errors.empty;
  return null;
};

exports.validatePassword = (password) => {
  if (isEmpty(password)) return errors.empty;
  return null;
};

exports.validateConfirmpassword = (password) => {
  if (isEmpty(password)) return errors.empty;
  return null;
};
