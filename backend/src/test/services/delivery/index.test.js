'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('delivery service', function() {
  it('registered the deliveries service', () => {
    assert.ok(app.service('deliveries'));
  });
});
