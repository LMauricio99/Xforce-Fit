const Joi = require('joi');
const validatorHandler = require('../middlewares/validatorHandler');

const signup = (req, res, next) => {
    const schema = Joi.object().keys({
        firstname: Joi.string()
            .alphanum()
            .min(3)
            .max(50),
        lastname: Joi.string()
            .alphanum()
            .min(3)
            .max(50),
        username: Joi.string()
            .alphanum()
            .required(),
        email: Joi.string()
            .email()
            .trim(),
        phone: Joi.number()
            .required(),
        address_fisical: Joi.string()
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required()
            .trim()
    });
    validatorHandler(req, res, next, schema);
};

const signin = (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .trim()
            .email()
            .required(),
        password: Joi.string()
            .trim()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required()
    });
    validatorHandler(req, res, next, schema);
};

module.exports = {
    signup,
    signin
};