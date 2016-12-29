/**
 * Created by JinWYP on 19/12/2016.
 */




const dauria = require('dauria');

// before-create Hook to get the file (if there is any)
// and turn it into a datauri,
// transparently getting feathers-blob to work
// with multipart file uploads

const defaults = {};

module.exports = function (options) {
    options = Object.assign({}, defaults, options);

    return function (hook) {

        const blobService = hook.app.service('/apimock/fileBlobs');

        console.log("-----------", hook.data)
        if (!hook.data.uri && hook.params.file) {
            const file = hook.params.file;
            const uri  = dauria.getBase64DataURI(file.buffer, file.mimetype);

            return blobService.create({
                uri : uri
            }).then(function (result) {

                hook.data = {
                    "originalFileName"  : file.originalname,
                    "fileType"       : result.mimetype,
                    "path"           : file.originalname,
                    "fileSizeMulter" : file.size,

                    "fileId"         : result.id,
                    "fileSize"       : result.size,

                    "contractType" : hook.data.contractType,
                    "contractUserType" : hook.data.contractUserType,
                    "userId" : hook.params.user._id,
                    "orderId" : hook.data.orderId
                };

                return hook
            })
        }

    };
};
