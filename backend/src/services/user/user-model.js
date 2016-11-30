'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    createdAt : {type : Date, 'default' : Date.now},
    updatedAt : {type : Date, 'default' : Date.now},

    email       : {type : String, required : true, unique : true},
    username    : {type : String, required : true, unique : true},
    mobilePhone : {type : String, required : true, unique : true},
    password    : {type : String, required : true},

    avatar    : {type : String, required : false},

    role : {type : String, required : false},

    companyName : {type : String, required : false}


});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;

