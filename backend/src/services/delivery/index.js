'use strict';

const service  = require('feathers-mongoose');
const delivery = require('./delivery-model');
const hooks    = require('./hooks');

module.exports = function () {
    const app = this;

    const options = {
        Model    : delivery,
        paginate : {
            default : 10,
            max     : 25
        }
    };

    // Initialize our service with any options it requires
    app.use('/apimock/deliveries', service(options));

    // Get our initialize service to that we can bind hooks
    const deliveryService = app.service('/apimock/deliveries');

    // Set up our before hooks
    deliveryService.before(hooks.before);

    // Set up our after hooks
    deliveryService.after(hooks.after);
};
