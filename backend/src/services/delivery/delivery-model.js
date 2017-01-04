'use strict';

// delivery-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    createdAt : {type : Date, default : Date.now},
    updatedAt : {type : Date, default : Date.now},

    orderNo : {type : String, required : true},
    orderId : {type : String, required : true},

    redemptionAmount : {type : Number, required : false}, // 贸易商告知港口返还货物吨位
    confirmDate  : {type : Date, required : false},
    uploadFiles : [{type : Schema.Types.ObjectId, ref : 'file'}]

});

const deliveryModel = mongoose.model('delivery', deliverySchema);

module.exports = deliveryModel;