'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('fileBlob service', function() {
  it('registered the fileBlobs service', () => {
    assert.ok(app.service('fileBlobs'));
  });
});
