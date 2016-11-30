'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
      //auth.verifyToken(),
      //auth.populateUser(),
      //auth.restrictToAuthenticated()
  ],
  find: [],
  get: [
  ],
  create: [
    auth.hashPassword()
  ],
  update: [
    //auth.restrictToOwner({ ownerField: '_id' })
  ],
  patch: [
    auth.restrictToOwner({ ownerField: '_id' })
  ],
  remove: [
    auth.restrictToOwner({ ownerField: '_id' })
  ]
};

exports.after = {
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
