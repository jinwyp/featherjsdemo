'use strict';

const globalHooks = require('../../../hooks');
const hooks       = require('feathers-hooks');
const auth        = require('feathers-authentication').hooks;


const restrictToRolesOptons = {
    roles      : ['systemAdmin'],
    fieldName  : 'role',
    idField    : '_id',
    ownerField : '_id',
    owner      : true
};

exports.before = {
    all    : [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToRoles(restrictToRolesOptons),
        globalHooks.logHook()
    ],
    find   : [
    ],
    get    : [
    ],
    create : [
        auth.hashPassword()
    ],
    update : [
        auth.hashPassword()
    ],
    patch  : [
        auth.hashPassword()
    ],
    remove : [
    ]
};

exports.after = {
    all    : [
        hooks.remove('password')
    ],
    find   : [],
    get    : [],
    create : [],
    update : [],
    patch  : [],
    remove : []
};


