const Joi = require("joi");

export const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().required(),
  firstname: Joi.string().required(),
  password: Joi.string().required().min(5).max(30),
  lastname: Joi.string().required(),
});
