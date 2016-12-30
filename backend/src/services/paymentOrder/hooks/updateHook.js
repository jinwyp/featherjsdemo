'use strict';

// src/services/financeorder/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};


module.exports = function (options) {
    options = Object.assign({}, defaults, options);

    return function (hook) {

        const user = hook.params.user;

        if (hook.data.depositType === 'alreadyPaid'){
            hook.data.confirmDate = new Date().getTime()
        }

        if (hook.data.paymentType === 'repayment'){
        }

    };
};


