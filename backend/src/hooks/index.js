'use strict';

// Add any common hooks you want to share across services in here.
// 
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

exports.myHook = function (options) {
    return function (hook) {
        console.log('My custom global hook ran. Feathers is awesome!');
    };
};


exports.logHook = function (options) {
    return function (hook) {
        console.log("========================================================================");
        console.log("------- hook provider: %s, method: %s, type: %s, item id: %s ", hook.params.provider, hook.method, hook.type, hook.id);
        console.log("------- hook params : ",   hook.params);
        //console.log("------- hook body data (for create, update and patch): ",   hook.data);
        //console.log("------- hook app : ", hook.app);
    }
};
