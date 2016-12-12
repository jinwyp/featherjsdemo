'use strict';

// src/services/financeorder/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};



function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}



module.exports = function (options) {
    options = Object.assign({}, defaults, options);

    return function (hook) {

        const user = hook.params.user;
        const remark = hook.data.remark.substring(0, 500).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');  // Do some basic HTML escaping

        var random = randomIntFromInterval(10000, 99999);

        hook.data = {
            requestTime : new Date().getTime(),
            status      : statusList[0].name,
            orderType   : 'MYD',
            orderNo     : 'JR20161212' + random,
            orderId     : random,

            remark      : remark,
            financerUserId : user._id,

            mortgageAmount : 1000, // 质押总数量（吨）
            mortgageValue  : 100,  // 融资金额（万元)
            mortgageDeadline  : 60 // 融资期限（天）

        }
    };
};
