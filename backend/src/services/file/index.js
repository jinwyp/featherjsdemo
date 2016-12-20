'use strict';

const service = require('feathers-mongoose');
const file    = require('./file-model');
const hooks   = require('./hooks');

const multer              = require('multer');


const fileMiddleware = function(req,res,next){
  req.feathers.file = req.file;
  next();
}

module.exports = function () {
    const app = this;

    const options      = {
        Model    : file,
        paginate : {
            default : 5,
            max     : 25
        }
    };

    const multipartMiddleware = multer({ dest: app.get('public') + '/upload/file' });

    // Initialize our service with any options it requires
    app.use('/api/files', multipartMiddleware.single('uri'), fileMiddleware, service(options));

    // Get our initialize service to that we can bind hooks
    const fileService = app.service('/api/files');

    // Set up our before hooks
    fileService.before(hooks.before);

    // Set up our after hooks
    fileService.after(hooks.after);
};
