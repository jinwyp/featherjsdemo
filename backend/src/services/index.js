'use strict';
const contact = require('./contact');
const paymentorder = require('./paymentorder');
const financeOrder = require('./financeOrder');
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
  app.configure(paymentorder);
  app.configure(contact);
};
