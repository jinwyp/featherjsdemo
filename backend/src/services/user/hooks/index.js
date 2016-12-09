'use strict';

const globalHooks = require('../../../hooks');
const hooks       = require('feathers-hooks');
const auth        = require('feathers-authentication').hooks;


const testHook = function () {
    return function (hook) {
        console.log("------- hook provider, method, id : ", hook.params.provider, hook.params.method, hook.id);
        console.log("------- hook payload : ",   hook.params.payload);
        console.log("------- hook userData : ",  hook.params.user); // will be `1` for GET /users/1/messages
        console.log("------- hook query : ", hook.params.query);
        console.log("------- hook body data : ", hook.data);
        console.log("------- hook app : ", hook.app);

    }

};


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
        testHook(),
        auth.restrictToRoles(restrictToRolesOptons)
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


