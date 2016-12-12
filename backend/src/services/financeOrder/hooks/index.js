'use strict';



const globalHooks = require('../../../hooks');
const hooks       = require('feathers-hooks-common');
const auth        = require('feathers-authentication').hooks;

const restrictToRequestUser = require('./restrict-to-request-user');
const process = require('./process');

const populateFinancerUser = hooks.populate('financerUser', {
    service : '/api/users',
    field   : 'financerUserId'
});


exports.before = {
    all    : [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        globalHooks.logHook()
    ],
    find   : [],
    get    : [],
    create : [process()],
    update : [hooks.remove('financerUserId'), restrictToRequestUser()],
    patch  : [hooks.remove('financerUserId'), restrictToRequestUser()],
    remove : []
};

exports.after = {
    all    : [populateFinancerUser],
    find   : [],
    get    : [],
    create : [],
    update : [],
    patch  : [],
    remove : []
};

