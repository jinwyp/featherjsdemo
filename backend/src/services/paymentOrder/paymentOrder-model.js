'use strict';

// paymentorder-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const paymentOrderSchema = new Schema({

    createdAt : {type : Date, default : Date.now},
    updatedAt : {type : Date, default : Date.now},

    paymentType  : {type : String, required : true},
    depositType  : {type : String, required : true},
    depositValue : {type : Number, required : true},
    orderNo : {type : String, required : true},
    orderId : {type : String, required : true},
    paymentNo    : {type : String, required : false},

    confirmDate      : {type : Date, required : false},
    redemptionAmount : {type : Number, required : false},

});

const paymentOrderModel = mongoose.model('paymentOrder', paymentOrderSchema);

module.exports = paymentOrderModel;