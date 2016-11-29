'use strict';

module.exports = function (app) {
    return function (req, res, next) {
        const body = req.body;

        // Get the user service and `create` a new user
        app.service('users').create({
            username    : body.username,
            email    : body.email,
            mobilePhone    : body.mobile,
            password : body.password
        })
        .then(user => res.redirect('/login.html'))
        // On errors, just call our error middleware
        .catch(next);
    };
};
