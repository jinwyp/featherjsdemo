'use strict';
const contact = require('./contact');
const paymentOrder = require('./paymentorder');
const financeOrder = require('./financeorder');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(financeOrder);
  app.configure(paymentOrder);
  app.configure(contact);
};
