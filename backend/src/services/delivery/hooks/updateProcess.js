/**
 * Created by JinWYP on 03/01/2017.
 */


'use strict';

const defaults = {};


module.exports = function (options) {
    options = Object.assign({}, defaults, options);

    return function (hook) {

        const user = hook.params.user;

        hook.data.confirmDate = new Date().getTime()

    };
};


