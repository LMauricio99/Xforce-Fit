const User = require('../models/user.model');

const checkUsername =  (req, res, next) => {
    const { username } = req.body;
    User.findByUsername(username, (_, data) => {
        if (data) {
            res.status(400).send({
                status: 'error',
                message: `Ya existe un usuario con el username '${username}' `
            });
            return;
        }
        next();
    });
}

module.exports = checkUsername;