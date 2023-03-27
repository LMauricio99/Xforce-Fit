const db = require('../config/db.config');
const { createNewUser: createNewUserQuery, findUserByUsername: findUserByUsernameQuery } = require('../database/queries');
const { logger } = require('../utils/logger');

class User {
    constructor(firstname, lastname, email, password, address_fisical, phone, username) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.address_fisical = address_fisical;
        this.phone = phone;
        this.username = username;
    }

    static create(newUser, cb) {
        db.query(createNewUserQuery, 
            [
                newUser.firstname, 
                newUser.lastname, 
                newUser.email, 
                newUser.password,
                newUser.phone,
                newUser.address_fisical,
                newUser.username
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id: res.insertId,
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    email: newUser.email,
                    address_fisical: newUser.address_fisical,
                    phone: newUser.phone,
                    username: newUser.username
                });
        });
    }

    static findByUsername(username, cb) {
        db.query(findUserByUsernameQuery, username, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res[0]);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }
}

module.exports = User;