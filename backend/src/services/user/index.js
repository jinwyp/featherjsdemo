'use strict';

const service = require('feathers-mongoose');
const user    = require('./user-model');
const hooks   = require('./hooks');

const auth = require('feathers-authentication');

const userInfoController = require('./controllers/user-info');




module.exports = function () {
    const app = this;

    const options = {
        Model    : user,
        paginate : {
            default : 10,
            max     : 1000
        }
    };

    // Initialize our service with any options it requires
    app.use('/api/users', service(options));

    // Get our initialize service to that we can bind hooks
    const userService = app.service('/api/users');

    // Set up our before hooks
    userService.before(hooks.before);

    // Set up our after hooks
    userService.after(hooks.after);



    app.post('/api/user/signup', userInfoController.signUp(app));
    app.post('/api/user/password', userInfoController.changePassword(app));


};
