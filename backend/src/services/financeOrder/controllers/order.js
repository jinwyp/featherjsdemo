/**
 * Created by JinWYP on 12/12/2016.
 */

'use strict';

const errors = require('feathers-errors');

const userRolesAll = [
    { name:'systemAdmin', displayName : '系统管理员'},
    { name:'financer', displayName : '融资方'},
    { name:'harbor', displayName : '港口'},
    { name:'supervisor', displayName : '监管'},
    { name:'traders', displayName : ' 贸易商'},
    { name:'tradersAccountant', displayName : '贸易商财务'},
    { name:'fundProvider', displayName : ' 资金方'},
    { name:'fundProviderAccountant', displayName : '资金方财务'}
];

const statusList = [
    {name : 'financingStep11', displayName:'等待融资方,港口上传合同及单据,等待贸易商选择监管方'},
    {name : 'financingStep12', displayName:'融资方完成上传合同,待贸易商审核'},
    {name : 'financingStep13', displayName:'港口完成上传合同,待贸易商审核'},
    {name : 'financingStep14', displayName:'贸易商已选择监管方,待监管上传合同及单据'},
    {name : 'financingStep15', displayName:'监管方完成上传合同,待贸易商审核'},
    {name : 'financingStep51', displayName:'贸易商审核不通过，流程结束'},
    {name : 'financingStep16', displayName:'贸易商审核通过,待贸易商财务放款建议'},
    {name : 'financingStep17', displayName:'贸易商财务放款建议审核通过,待资金方审核'},
    {name : 'financingStep52', displayName:'资金方审核不通过，流程结束'},
    {name : 'financingStep18', displayName:'资金方审核通过,待资金方财务放款'},
    {name : 'financingStep19', displayName:'资金方财务已放款,待贸易商确认收款,银行转账中'},
    {name : 'financingStep20', displayName:'贸易商已自动确认收款,贸易商已自动打款给融资方, 待融资方确认收款,银行转账中'},
    {name : 'financingStep21', displayName:'融资方已自动确认收款,融资放款阶段完成,待融资方回款'},
    {name : 'repaymentStep31', displayName:'融资方已回款,待贸易商放货'},
    {name : 'repaymentStep32', displayName:'贸易商已放货,待港口放货确认'},
    {name : 'repaymentStep33', displayName:'港口已确认返回货物,融资方部分回款已完成, 待融资方继续回款'},
    {name : 'repaymentStep34', displayName:'港口已确认返回货物,融资方全部回款已完成, 待贸易商确认回款给资金方'},
    {name : 'repaymentStep53', displayName:'贸易商已扣押货物（处置货权）,融资方未回款, 待贸易商确认回款给资金方'},
    {name : 'repaymentStep35', displayName:'贸易商已确认回款给资金方,待贸易商财务放款'},
    {name : 'repaymentStep36', displayName:'贸易商财务已回款给资金方，流程结束'}

];

const statusObject = {};
statusList.forEach(function (item, index){
    statusObject[item.name] = item.name;
});


const actionList = [
    {statusAt:"financingStep11", operator : 'financer', name : 'a11FinishedUpload', displayName : '完成上传资料'},
    {statusAt:"financingStep11", operator : 'harbor', name : 'a12FinishedUpload', displayName : '完成上传资料'},
    {statusAt:"financingStep11", operator : 'traders', name : 'a13SelectSupervisor', displayName : '完成选择监管方'},
    {statusAt:"financingStep14", operator : 'supervisor', name : 'a14FinishedUpload', displayName : '完成上传资料'},

    {statusAt:"financingStep11", operator : 'traders', name : 'a15Approved', displayName : '贸易商审核通过'},
    {statusAt:"financingStep11", operator : 'traders', name : 'a16NotApproved', displayName : '贸易商审核不通过'},
];

const actionObject = {};

actionList.forEach(function (item, index){
    actionObject[item.name] = item.name;
});



const changeStep = function (state, action) {
    state = state || 'financingStep11';
    action = action || actionObject.a11FinishedUpload;

    if (state === statusObject.financingStep11) {
        if(action === actionObject.a11FinishedUpload){
            console.log('----------11111', state)
            state = statusObject.financingStep12
        }

        if(action === actionObject.a12FinishedUpload){
            console.log('----------22222', state)
            state = statusObject.financingStep13
        }

        if(action === actionObject.a13SelectSupervisor){
            state = statusObject.financingStep14
        }
    }

    if (state === statusObject.financingStep14) {
        if(action === actionObject.a14FinishedUpload){
            state = statusObject.financingStep15
        }
    }

    // 贸易商审核开始
    if (state === statusObject.financingStep11) {
        if(action === actionObject.a15Approved){
            state = statusObject.financingStep16
        }

        if(action === actionObject.a16NotApproved){
            state = statusObject.financingStep51
        }
    }

    console.log('----------', state)
    return state

};



exports.goNextStep = function (app) {
    return function (req, res, next) {
        const body = req.body; // {operator : 'financer', orderId : '', action : ''}

        // Get the user service and `create` a new user

        const orderService = app.service('/api/financeorders');

        if (req.body.orderId){
            orderService.get(req.body.orderId)
                .then(order  => {

                    if (!order) {
                        throw new errors.BadRequest('没找到该审批融资单');
                    }

                    if (order.status === statusObject.financingStep11){
                        if (req.body.operator === 'financer'){
                            var newStatus = changeStep(order.status, req.body.action);
                            return orderService.patch(req.body.orderId, {statusChild1Financer: newStatus});
                        }

                        if (req.body.operator === 'harbor'){
                            var newStatus = changeStep(order.status, req.body.action);
                            return orderService.patch(req.body.orderId, {statusChild2Harbor: newStatus});
                        }

                        if (req.body.operator === 'traders'){
                            var newStatus = changeStep(order.status, req.body.action);
                            return orderService.patch(req.body.orderId, {statusChild3Supervisor: newStatus});
                        }

                        if (req.body.operator === 'supervisor'){
                            var newStatus = changeStep(order.status, req.body.action);
                            return orderService.patch(req.body.orderId, {statusChild3Supervisor: newStatus});
                        }
                    }else {

                    }




                })
                .then(order2 => {
                    res.send({
                        success : true,
                        data : order2
                    });
                })
                .catch(next);
        }else{
            res.json({})
        }


    };
};



exports.changePassword = function (app) {
    return function (req, res, next) {

        const userService = app.service('/api/users');

        console.log("---- body", req.body);
        console.log("---- feathers", req.feathers);

        // Get the user service and `create` a new user

        userService.get(req.body.userId)
            .then(user => {
                if (!user) {
                    throw new errors.BadRequest('没找到该用户');
                }
                if (bcrypt.compareSync(req.body.oldPassword, user.password)){
                    return userService.patch(req.body.userId, {password: req.body.newPassword});
                }else{
                    throw new errors.BadRequest('当前密码输入错误!');
                }
            })
            .then(user => {
                res.send({
                    success : true,
                    data : user
                });
            })
            .catch(next);
    };
};
