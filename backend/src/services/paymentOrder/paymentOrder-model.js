'use strict';

// paymentorder-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentOrderSchema = new Schema({

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },

  paymentNo: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  redemptionAmount: { type: Number, required: true },
  redemptionValue: { type: Number, required: true }
});

const paymentOrderModel = mongoose.model('paymentOrder', paymentOrderSchema);

module.exports = paymentOrderModel;