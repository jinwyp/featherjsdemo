'use strict';

const assert = require('assert');
const restrictToRequestUser = require('../../../../src/services/financeorder/hooks/restrict-to-request-user.js');

describe('financeorder restrictToRequestUser hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restrictToRequestUser()(mockHook);

    assert.ok(mockHook.restrictToRequestUser);
  });
});
