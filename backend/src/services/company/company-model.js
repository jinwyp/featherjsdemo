'use strict';

// company-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const companySchema = new Schema({
    party_name  : {type : String, required : true},
    party_class : {type : String, required : true},
    instance_id : {type : String},
    createdAt   : {type : Date, 'default' : Date.now},
    updatedAt   : {type : Date, 'default' : Date.now}
});

const companyModel = mongoose.model('company', companySchema);

module.exports = companyModel;