'use strict';

const hooks = require('./hooks');

const BlobService = require('feathers-blob');
const fs          = require('fs-blob-store')


module.exports = function () {
    const app = this;

    const blobStorage  = fs(app.get('public') + '/upload/blob')
    const blobService1 = BlobService({
        Model : blobStorage
    });

    // Initialize our service with any options it requires
    app.use('/api/fileBlobs', blobService1);

    // Get our initialize service to that we can bind hooks
    const fileBlobService = app.service('/api/fileBlobs');

    // Set up our before hooks
    fileBlobService.before(hooks.before);

    // Set up our after hooks
    fileBlobService.after(hooks.after);
};




class Service {
    constructor(options) {
        this.options = options || {};
    }

    find(params) {
        return Promise.resolve([]);
    }

    get(id, params) {
        return Promise.resolve({
            id, text : `A new message with ID: ${id}!`
        });
    }

    create(data, params) {
        if (Array.isArray(data)) {
            return Promise.all(data.map(current => this.create(current)));
        }

        return Promise.resolve(data);
    }

    update(id, data, params) {
        return Promise.resolve(data);
    }

    patch(id, data, params) {
        return Promise.resolve(data);
    }

    remove(id, params) {
        return Promise.resolve({id});
    }
}


module.exports.Service = Service;
