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
    password    : {type : String, required : false, default:"$2a$10$umZG.q.5Co02rBd2yzcVZeZYb2cGX6IN1Yesyny6scXmpGxfMgEwG"},

    companyName : {type : String, required : true},
    role : {type : String, required : true},
    belongToUser : {type: Schema.Types.ObjectId, required : false},

    avatar    : {type : String, required : false},


});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;

