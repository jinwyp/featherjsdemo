'use strict';

// financeOrder-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const financeOrderSchema = new Schema({

    createdAt : {type : Date, 'default' : Date.now},
    updatedAt : {type : Date, 'default' : Date.now},

    requestTime : {type : Date, required : true},
    approveTime : {type : Date, required : true},
    requestUser : {type: Schema.Types.ObjectId, required : false},
    approveUser : {type: Schema.Types.ObjectId, required : false},

    type           : {type : String, required : true},
    orderNo        : {type : String, required : true},
    orderId        : {type : Number, required : true},
    status         : {type : String, required : true},
    mortgageAmount : {type : Number, required : true},
    mortgageValue  : {type : Number, required : true},
    depositValue   : {type : Number, required : true},

    harbor               : {type : String, required : false},
    redemptionAmount     : {type : Number, required : false},
    returnValue          : {type : Number, required : false},
    redemptionAmountLeft : {type : Number, required : false},
    financingValue       : {type : Number, required : false},

    lifeTimeDay : {type : Number, required : false},

    remark : {type : String, required : false},

    paymentList : [{type : Schema.Types.ObjectId, ref : 'paymentOrder'}],
    contactList : [{type : Schema.Types.ObjectId, ref : 'contact'}]
});

const financeOrderModel = mongoose.model('financeOrder', financeOrderSchema);

module.exports = financeOrderModel;