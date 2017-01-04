'use strict';
const company = require('./company');
const fileBlob = require('./fileBlob');
const file = require('./file');
const contact = require('./contact');
const delivery = require('./delivery');
const paymentOrder = require('./paymentOrder');
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
  app.configure(paymentOrder);
  app.configure(delivery);
  app.configure(contact);
  app.configure(file);
  app.configure(fileBlob);

  app.configure(company);
};
