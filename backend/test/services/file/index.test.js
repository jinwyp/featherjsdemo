'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('file service', function() {
  it('registered the files service', () => {
    assert.ok(app.service('files'));
  });
});
