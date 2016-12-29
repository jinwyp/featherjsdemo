'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth        = require('feathers-authentication').hooks;

const updateProcess = require('./updateHook.js');

exports.before = {
  all: [
      auth.verifyToken(),
      auth.populateUser(),
      auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [updateProcess()],
  patch: [updateProcess()],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
