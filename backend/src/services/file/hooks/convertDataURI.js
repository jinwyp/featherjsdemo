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

        const user = hook.params.user;
        const remark = hook.data.remark.substring(0, 500).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');  // Do some basic HTML escaping

        const blobService = app.service('/api/fileBlobs');


        if (!hook.data.uri && hook.params.file){
            const file = hook.params.file;
            const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);


            blobService.create({
                uri: uri
            }).then(function (result) {
                console.log(' ---------- Stored blob with id:', result.id);

                hook.data = {
                    "originalUrl": file.originalname,
                    "url": file.fieldname,
                    "fileSizeMulter": file.size,
                    "fileType": result.mimetype,
                    "fileId": result.id,
                    "contentURI": result.uri,
                    "fileSize": result.size

                };

            }).catch(err => {
                console.error(err);
            });
        }
    };
};
