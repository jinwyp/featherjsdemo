'use strict';

const service      = require('feathers-mongoose');
const paymentOrder = require('./paymentOrder-model');
const hooks        = require('./hooks');

module.exports = function () {
    const app = this;

    const options = {
        Model    : paymentOrder,
        paginate : {
            default : 10,
            max     : 25
        }
    };

    // Initialize our service with any options it requires
    app.use('/apimock/paymentorders', service(options));

    // Get our initialize service to that we can bind hooks
    const paymentOrderService = app.service('/apimock/paymentorders');

    // Set up our before hooks
    paymentOrderService.before(hooks.before);

    // Set up our after hooks
    paymentOrderService.after(hooks.after);
};
