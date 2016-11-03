'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('financeOrder service', function() {
  it('registered the financeOrders service', () => {
    assert.ok(app.service('financeOrders'));
  });
});
