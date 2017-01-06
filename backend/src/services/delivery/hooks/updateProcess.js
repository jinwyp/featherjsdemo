/**
 * Created by JinWYP on 03/01/2017.
 */


'use strict';

const defaults = {};


module.exports = function (options) {
    options = Object.assign({}, defaults, options);

    return function (hook) {

        const user = hook.params.user;

        const orderService = hook.app.service('/apimock/financeorders');
        const deliveryService = hook.app.service('/apimock/deliveries');

        hook.data.confirmDate = new Date().getTime()



        return deliveryService.get(hook.id).then(delivery => {


            return orderService.get(delivery.orderId).then(order => {

                order.redemptionAmount     = order.redemptionAmount || 0 + delivery.redemptionAmount
                order.redemptionAmountLeft = order.harborConfirmAmount - order.redemptionAmount

                return orderService.patch(delivery.orderId, {
                    redemptionAmount : order.redemptionAmount,
                    redemptionAmountLeft : order.redemptionAmountLeft
                }).then( order2 => {
                    console.log("hook id : ", hook.id);
                    return hook;
                });


            })


        });


    };
};


