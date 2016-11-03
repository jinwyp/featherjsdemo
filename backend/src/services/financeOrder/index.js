'use strict';

const service = require('feathers-mongoose');
const financeOrder = require('./financeOrder-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: financeOrder,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/financeOrders', service(options));

  // Get our initialize service to that we can bind hooks
  const financeOrderService = app.service('/financeOrders');

  // Set up our before hooks
  financeOrderService.before(hooks.before);

  // Set up our after hooks
  financeOrderService.after(hooks.after);
};
