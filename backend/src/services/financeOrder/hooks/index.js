'use strict';

const restrictToRequestUser = require('./restrict-to-request-user');
const process = require('./process');

const globalHooks = require('../../../hooks');
const hooks       = require('feathers-hooks');
const auth        = require('feathers-authentication').hooks;

const populateRequestUser = hooks.populate('requestUserBy', {
    service : 'users',
    field   : 'requestUser'
});


exports.before = {
    all    : [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated()
    ],
    find   : [],
    get    : [],
    create : [process()],
    update : [hooks.remove('requestUserBy'), restrictToRequestUser()],
    patch  : [hooks.remove('requestUserBy'), restrictToRequestUser()],
    remove : []
};

exports.after = {
    all    : [],
    find   : [populateRequestUser],
    get    : [populateRequestUser],
    create : [populateRequestUser],
    update : [],
    patch  : [],
    remove : []
};
