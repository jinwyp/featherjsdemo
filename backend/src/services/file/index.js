'use strict';

const service = require('feathers-mongoose');
const file    = require('./file-model');
const hooks   = require('./hooks');
const multer  = require('multer');


const fileMiddleware = function (req, res, next) {
    console.log("-----------", req.file)
    req.feathers.file = req.file;
    next();
}



module.exports = function () {
    const app = this;

    const options = {
        Model    : file,
        paginate : {
            default : 100,
            max     : 100
        }
    };

    const storage1 = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, app.get('public') + '/upload/file')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })

    const storage2 = multer.memoryStorage()

    const multipartMiddleware = multer({storage : storage2});

    // Initialize our service with any options it requires
    app.use('/apimock/files', multipartMiddleware.single('file'), fileMiddleware, service(options));

    // Get our initialize service to that we can bind hooks
    const fileService = app.service('/apimock/files');

    // Set up our before hooks
    fileService.before(hooks.before);

    // Set up our after hooks
    fileService.after(hooks.after);
};
