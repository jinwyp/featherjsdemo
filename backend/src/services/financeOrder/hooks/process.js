'use strict';

// src/services/financeorder/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

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
