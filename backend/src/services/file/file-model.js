'use strict';

// file-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const fileSchema = new Schema({
    path             : {type : String, required : true},
    originalFileName : {type : String, required : true},
    fileId           : {type : String, required : true},
    fileType         : {type : String, required : false},
    fileSize         : {type : Number, required : false},
    fileSizeMulter   : {type : Number, required : false},



    createdAt   : {type : Date, 'default' : Date.now},
    updatedAt   : {type : Date, 'default' : Date.now},

    contractType : {type : String, required : false},
    contractUserType : {type : String, required : false},
    userId : {type : Schema.Types.ObjectId, ref : 'user', required : true},
    orderId : {type : Schema.Types.ObjectId, ref : 'financeOrder', required : true}
});

const fileModel = mongoose.model('file', fileSchema);

module.exports = fileModel;