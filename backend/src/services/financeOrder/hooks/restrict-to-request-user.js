'use strict';

// src/services/financeorder/hooks/restrict-to-request-user.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};
const errors   = require('feathers-errors');


module.exports = function (options) {
    options = Object.assign({}, defaults, options);

    return function (hook) {
        hook.restrictToRequestUser = true;

        const messageService = hook.app.service('messages');

        // First get the message that the user wants to access
        console.log("hook id : ", hook.id);
        return messageService.get(hook.id, hook.params).then(message => {
            // Throw a not authenticated error if the message and user id don't match
            if (message.requestUserBy._id !== hook.params.user._id) {
                throw new errors.NotAuthenticated('Access not allowed');
            }

            // Otherwise just return the hook
            return hook;
        });

    };
};
