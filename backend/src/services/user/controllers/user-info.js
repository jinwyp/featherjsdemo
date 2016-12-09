'use strict';

const bcrypt = require('bcryptjs');


const errors = require('feathers-errors');


exports.signUp = function (app) {
    return function (req, res, next) {
        const body = req.body;

        // Get the user service and `create` a new user
        app.service('/api/users').create({
            username    : body.username,
            email    : body.email,
            mobilePhone    : body.mobilePhone,
            password : body.password,
            role : body.role,
            companyName : body.companyName
        })
        .then(user => {
            //res.redirect('/login.html')
            res.send(user);
        })
        // On errors, just call our error middleware
        .catch(next);
    };
};



exports.changePassword = function (app) {
    return function (req, res, next) {

        const userService = app.service('/api/users');

        console.log("---- body", req.body);
        console.log("---- feathers", req.feathers);

        // Get the user service and `create` a new user

        userService.get(req.body.userId)
        .then(user => {
            if (!user) {
                throw new errors.BadRequest('没找到该用户');
            }
            if (bcrypt.compareSync(req.body.oldPassword, user.password)){
                return userService.patch(req.body.userId, {password: req.body.newPassword});
            }else{
                throw new errors.BadRequest('当前密码输入错误!');
            }
        })
        .then(user => {
            res.send({
                success : true,
                data : user
            });
        })
        .catch(next);
    };
};
