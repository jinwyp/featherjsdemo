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

    orderNo : {type : String, required : true},
    orderId : {type : String, required : true},
    paymentType  : {type : String, required : true},

    depositType  : {type : String, required : false},
    depositValue : {type : Number, required : false},
    paymentNo    : {type : String, required : false},
    confirmDate  : {type : Date, required : false},


    redemptionValue : {type : Number, required : false},  // 本次还款金额
    leftPrincipalValue : {type : Number, required : false}, // 剩余本金

    redemptionAmount : {type : Number, required : false},
    uploadFiles : [{type : Schema.Types.ObjectId, ref : 'file'}]


});

const paymentOrderModel = mongoose.model('paymentOrder', paymentOrderSchema);

module.exports = paymentOrderModel;