'use strict';

// file-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const fileSchema = new Schema({
    url         : {type : String, required : true},
    originalUrl : {type : String, required : true},
    contentURI  : {type : String, required : true},
    fileId      : {type : String, required : true},
    fileType    : {type : String, required : false},
    fileSize    : {type : Number, required : false},
    fileSizeMulter    : {type : Number, required : false},



    createdAt   : {type : Date, 'default' : Date.now},
    updatedAt   : {type : Date, 'default' : Date.now}
});

const fileModel = mongoose.model('file', fileSchema);

module.exports = fileModel;