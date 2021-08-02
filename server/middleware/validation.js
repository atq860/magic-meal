const Joi = require("joi");

function validateItem(item) {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    restaurant: Joi.string().required(),
  });

  const result = schema.validate(item);
  console.log(result);
  return result;
}

function validateLogin(credentials) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(credentials);
  console.log(result);
  return result;
}

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    contact: Joi.string().required(),
    role: Joi.string().required(),
  });

  const result = schema.validate(user);
  console.log(result);
  return result;
}

function validateRestaurant(restaurant) {
  const schema = Joi.object({
    ownerName: Joi.string().required(),
    restaurantName: Joi.string().required(),
    contact: Joi.string().required(),
    category: Joi.string().required(),
    address: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  });
  const result = schema.validate(restaurant);
  console.log(result);
  return result;
}

exports.validateUser = validateUser;
exports.validateRestaurant = validateRestaurant;
exports.validateLogin = validateLogin;
exports.validateItem = validateItem;
