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
    {name : 'financingStep11', displayName:'等待融资方上传合同及单据,等待贸易商选择港口和监管方'},
    {name : 'financingStep12', displayName:'融资方完成上传合同,待贸易商审核'},
    {name : 'financingStep13', displayName:'贸易商已选择港口和监管方,待港口和监管上传合同及单据'},
    {name : 'financingStep14', displayName:'港口完成上传合同,待贸易商审核'},
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
    {name : 'repaymentStep32', displayName:'贸易商已放货, 融资方部分回款已完成, 待港口放货确认'},
    {name : 'repaymentStep33', displayName:'贸易商已放货, 融资方全部回款已完成, 待港口放货确认'},
    {name : 'repaymentStep34', displayName:'港口已确认返回货物,融资方部分回款已完成, 待融资方继续回款'},
    {name : 'repaymentStep35', displayName:'港口已确认返回货物,融资方全部回款已完成, 待贸易商确认回款给资金方'},
    {name : 'repaymentStep53', displayName:'贸易商已扣押货物（处置货权）,融资方未回款, 待贸易商确认回款给资金方'},
    {name : 'repaymentStep36', displayName:'贸易商已确认回款给资金方,待贸易商财务放款'},
    {name : 'repaymentStep37', displayName:'贸易商财务已回款给资金方，流程结束'}
];

const statusObject = {};
statusList.forEach(function (item, index){
    statusObject[item.name] = item.name;
});


const actionList = [
    {statusAt:"financingStep11", operator : 'financer', name : 'a11FinishedUpload', displayName : '确认完成上传资料并提交'},
    {statusAt:"financingStep11", operator : 'traders', name : 'a12SelectHarborAndSupervisor', displayName : '完成选择港口和监管方'},

    {statusAt:"financingStep13", operator : 'harbor', name : 'a13FinishedUpload', displayName : '确认完成上传资料并提交'},
    {statusAt:"financingStep13", operator : 'supervisor', name : 'a14FinishedUpload', displayName : '确认完成上传资料并提交'},

    {statusAt:"financingStep12", operator : 'traders', name : 'a15Approved', displayName : '审核通过'},
    {statusAt:"financingStep12", operator : 'traders', name : 'a16NotApproved', displayName : '审核不通过'},

    {statusAt:"financingStep16", operator : 'tradersAccountant', name : 'a17Approved', displayName : '确认放款'},

    {statusAt:"financingStep17", operator : 'fundProvider', name : 'a18Approved', displayName : '审核通过'},
    {statusAt:"financingStep17", operator : 'fundProvider', name : 'a19NotApproved', displayName : '审核不通过'},


    {statusAt:"financingStep18", operator : 'fundProviderAccountant', name : 'a20Approved', displayName : '确认放款'},
    {statusAt:"financingStep19", operator : 'fundProviderAccountant', name : 'a21auto', displayName : '自动确认收款'},
    {statusAt:"financingStep20", operator : 'fundProviderAccountant', name : 'a22auto', displayName : '自动确认收款'},


    {statusAt:"financingStep21", operator : 'financer', name : 'a31FirstReturnMoney', displayName : '确认回款'},
    {statusAt:"repaymentStep34", operator : 'financer', name : 'a32SecondReturnMoney', displayName : '确认回款'},

    {statusAt:"repaymentStep31", operator : 'traders', name : 'a32ReturnPortionCargo', displayName : ' 部分回款完成,确认放货'},
    {statusAt:"repaymentStep31", operator : 'traders', name : 'a33ReturnAllCargo', displayName : '全部回款完成,确认放货'},
    {statusAt:"repaymentStep32", operator : 'harbor', name : 'a34ConfirmPortionCargo', displayName : ' 部分回款完成,确认返回货物'},
    {statusAt:"repaymentStep33", operator : 'harbor', name : 'a35ConfirmAllCargo', displayName : '全部回款完成,确认返回货物'},

    {statusAt:"repaymentStep35", operator : 'traders', name : 'a36ReturnMoney', displayName : '确认回款给资金方'},
    {statusAt:"repaymentStep36", operator : 'tradersAccountant', name : 'a37Approved', displayName : '放款给资金方'},
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
            state = statusObject.financingStep12
        }

        if(action === actionObject.a12SelectHarborAndSupervisor){
            state = statusObject.financingStep13
        }
    }

    if (state === statusObject.financingStep13) {
        if(action === actionObject.a13FinishedUpload){
            state = statusObject.financingStep14
        }

        if(action === actionObject.a14FinishedUpload){
            state = statusObject.financingStep15
        }
    }

    // 贸易商审核开始
    if (state === statusObject.financingStep12) {
        if(action === actionObject.a15Approved){
            state = statusObject.financingStep16
        }

        if(action === actionObject.a16NotApproved){
            state = statusObject.financingStep51
        }
    }

    if (state === statusObject.financingStep16) {
        if(action === actionObject.a17Approved){
            state = statusObject.financingStep17
        }
    }

    // 资金方审核开始
    if (state === statusObject.financingStep17) {
        if(action === actionObject.a18Approved){
            state = statusObject.financingStep18
        }

        if(action === actionObject.a19NotApproved){
            state = statusObject.financingStep52
        }
    }

    if (state === statusObject.financingStep18) {
        if(action === actionObject.a20Approved){
            state = statusObject.financingStep19
        }
    }
    if (state === statusObject.financingStep19) {
        if(action === actionObject.a21auto){
            state = statusObject.financingStep20
        }
    }
    if (state === statusObject.financingStep20) {
        if(action === actionObject.a22auto){
            state = statusObject.financingStep21
        }
    }

    // 融资方第一次回款开始
    if (state === statusObject.financingStep21 ) {
        if(action === actionObject.a31FirstReturnMoney){
            state = statusObject.repaymentStep31
        }
    }
    // 融资方第二次回款开始
    if (state === statusObject.repaymentStep34) {
        if(action === actionObject.a32SecondReturnMoney){
            state = statusObject.repaymentStep31
        }
    }

    // 贸易商判断是否全部回款完成
    if (state === statusObject.repaymentStep31) {
        if(action === actionObject.a32ReturnPortionCargo){
            state = statusObject.repaymentStep32
        }
        if(action === actionObject.a33ReturnAllCargo){
            state = statusObject.repaymentStep33
        }
    }

    // 港口判断是否全部回款完成
    if (state === statusObject.repaymentStep32) {
        if(action === actionObject.a34ConfirmPortionCargo){
            state = statusObject.repaymentStep34
        }
    }
    if (state === statusObject.repaymentStep33) {
        if(action === actionObject.a35ConfirmAllCargo){
            state = statusObject.repaymentStep35
        }
    }

    //  贸易商回款给资金方
    if (state === statusObject.repaymentStep35) {
        if(action === actionObject.a36ReturnMoney){
            state = statusObject.repaymentStep36
        }
    }
    if (state === statusObject.repaymentStep36) {
        if(action === actionObject.a37Approved){
            state = statusObject.repaymentStep36
        }
    }

    console.log('----------- 当前状态: ', state);
    return state

};



exports.goNextStep = function (app) {
    return function (req, res, next) {
        const body = req.body; // {operator : 'financer', orderId : '', action : ''}

        console.log(req.headers)
        // Get the user service and `create` a new user

        const orderService = app.service('/api/financeorders');

        if (req.body.orderId){
            orderService.get(req.body.orderId)
                .then(order  => {

                    if (!order) {
                        throw new errors.BadRequest('没找到该审批融资单');
                    }

                    if (order.status === statusObject.financingStep11){
                        console.log(11111)
                        if (req.body.operator === 'financer'){
                            var tempStatus = changeStep(order.status, req.body.action);
                            return orderService.patch(req.body.orderId, {statusChild11Financer: tempStatus, status: tempStatus});
                        }

                        if (req.body.operator === 'traders'){
                            return orderService.patch(req.body.orderId, {statusChild12Traders: changeStep(order.status, req.body.action)});
                        }

                    }else if (order.status === statusObject.financingStep13){
                        console.log(2222222)
                        if (req.body.operator === 'harbor'){
                            return orderService.patch(req.body.orderId, {statusChild21Harbor: changeStep(order.status, req.body.action)});
                        }

                        if (req.body.operator === 'supervisor'){
                            return orderService.patch(req.body.orderId, {statusChild22Supervisor: changeStep(order.status, req.body.action)});
                        }
                    }else{
                        console.log(33333)
                        if (order.statusChild11Financer === statusObject.financingStep12 && order.statusChild21Harbor === statusObject.financingStep14 &&  order.statusChild22Supervisor === statusObject.financingStep15 ){
                            return orderService.patch(req.body.orderId, {status: changeStep(order.status, req.body.action)});
                        }

                    }

                })
                .then(order2 => {
                    console.log(order2)
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
