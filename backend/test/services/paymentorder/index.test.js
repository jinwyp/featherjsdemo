'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('paymentorder service', function() {
  it('registered the paymentorders service', () => {
    assert.ok(app.service('paymentorders'));
  });
});
