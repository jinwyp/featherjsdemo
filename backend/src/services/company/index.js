'use strict';

const service = require('feathers-mongoose');
const company = require('./company-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: company,
    paginate: {
      default: 10,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/apimock/companies', service(options));

  // Get our initialize service to that we can bind hooks
  const companyService = app.service('/apimock/companies');

  // Set up our before hooks
  companyService.before(hooks.before);

  // Set up our after hooks
  companyService.after(hooks.after);
};
