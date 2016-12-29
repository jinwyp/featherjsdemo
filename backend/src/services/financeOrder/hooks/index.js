'use strict';



const globalHooks = require('../../../hooks');
const hooks       = require('feathers-hooks-common');
const auth        = require('feathers-authentication').hooks;

const restrictToRequestUser = require('./restrict-to-request-user');
const preProcess = require('./process');

const populateFinancerUser = hooks.populate('financerUser', {
    service : '/apimock/users',
    field   : 'financerUserId'
});
const populateSupervisorUser = hooks.populate('supervisorUser', {
    service : '/apimock/users',
    field   : 'supervisorUserId'
});
const populateHarborUser = hooks.populate('harborUser', {
    service : '/apimock/users',
    field   : 'harborUserId'
});

const populateTraderUser = hooks.populate('traderUser', {
    service : '/apimock/users',
    field   : 'traderUserId'
});
const populateTraderAccountantUser = hooks.populate('traderAccountantUser', {
    service : '/apimock/users',
    field   : 'traderAccountantUserId'
});

const populateFundProviderUser = hooks.populate('fundProviderUser', {
    service : '/apimock/users',
    field   : 'fundProviderUserId'
});
const populateFundProviderAccountantUser = hooks.populate('fundProviderAccountantUser', {
    service : '/apimock/users',
    field   : 'fundProviderAccountantUserId'
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
    create : [preProcess()],
    update : [],
    patch  : [],
    remove : []
};

exports.after = {
    all    : [
        populateFinancerUser,
        populateTraderUser,
        populateTraderAccountantUser,
        populateHarborUser,
        populateSupervisorUser,
        populateFundProviderUser,
        populateFundProviderAccountantUser
    ],
    find   : [],
    get    : [],
    create : [],
    update : [],
    patch  : [],
    remove : []
};

