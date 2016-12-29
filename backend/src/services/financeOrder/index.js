'use strict';

const service      = require('feathers-mongoose');
const financeOrder = require('./financeOrder-model');
const hooks        = require('./hooks');

const orderController = require('./controllers/order.js');


module.exports = function () {
    const app = this;

    const options = {
        Model    : financeOrder,
        paginate : {
            default : 10,
            max     : 1000
        }
    };

    // Initialize our service with any options it requires
    app.use('/apimock/financeorders', service(options));

    // Get our initialize service to that we can bind hooks
    const financeOrderService = app.service('/apimock/financeorders');

    // Set up our before hooks
    financeOrderService.before(hooks.before);

    // Set up our after hooks
    financeOrderService.after(hooks.after);


    app.post('/apimock/financeorders/audit', orderController.goNextStep(app));
    app.get('/apimock/financeorders/file/:fileId', orderController.getFileById(app));
};
