'use strict';

// src/services/financeorder/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function (options) {
    options = Object.assign({}, defaults, options);

    return function (hook) {
        hook.process = true;

        const user = hook.params.user;
        const remark = hook.data.remark.substring(0, 400).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');  // Do some basic HTML escaping

        console.log("------- hook data", hook.data);
        hook.data = {
            remark      : remark,
            requestUser : user._id,
            createdAt   : new Date().getTime(),

            requestTime : new Date().getTime(),
            approveTime : new Date().getTime(),


            type           : 'MYD',
            orderNo        : 'JR2016101700099',
            orderId        : 101,
            status         : '30',
            mortgageAmount : 100,
            mortgageValue  : 30000,
            depositValue   : 20,

        }
    };
};
