const Joi = require('joi');


//validation for post and put requests
const createUser = {
  body: Joi.object().keys({
    username: Joi.string().required(),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    username: Joi.string().required(),
  }),
  body: Joi.object().keys({
    location: Joi.string().allow(''),
    blog: Joi.string().uri().allow(''),
    bio: Joi.string().allow(''),
  }),
};

module.exports = {
  createUser,
  updateUser,
};
