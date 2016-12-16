'use strict';

// financeOrder-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const financeOrderSchema = new Schema({

    createdAt : {type : Date, default : Date.now},
    updatedAt : {type : Date, default : Date.now},

    requestTime : {type : Date, required : true},
    status      : {type : String, required : true},
    orderType   : {type : String, required : true},
    orderNo     : {type : String, required : true},
    orderId     : {type : Number, required : true},

    statusChild11Financer : {type : String, required : false},
    statusChild12Trader : {type : String, required : false},
    statusChild21Harbor : {type : String, required : false},
    statusChild22Supervisor : {type : String, required : false},

    financerUserId               : {type : Schema.Types.ObjectId, required : false},  // 融资方
    supervisorUserId             : {type : Schema.Types.ObjectId, required : false}, // 库存港口
    harborUserId                 : {type : Schema.Types.ObjectId, required : false}, // 库存港口
    fundProviderUserId           : {type : Schema.Types.ObjectId, required : false}, // 资金方
    fundProviderAccountantUserId : {type : Schema.Types.ObjectId, required : false}, // 资金方财务
    traderUserId                : {type : Schema.Types.ObjectId, required : false}, // 贸易商
    traderAccountantUserId      : {type : Schema.Types.ObjectId, required : false}, // 贸易商财务


    financerCompanyName     : {type : String, required : false},  // 融资方
    downstreamCompanyName   : {type : String, required : false}, // 下游采购方
    harbor                  : {type : String, required : false}, // 库存港口
    cargoOwner              : {type : String, required : false}, // 货主名称
    fundProviderCompanyName : {type : String, required : false}, // 资金方
    traderCompanyName      : {type : String, required : false}, // 贸易商



    mortgageAmount : {type : Number, required : true}, // 质押总数量（吨）
    mortgageValue  : {type : Number, required : true},  // 融资金额（万元)
    mortgageDeadline  : {type : Number, required : true},  // 融资期限（天）

    depositValue   : {type : Number, required : false},  // 保证金金额（万元)
    loanValue   : {type : Number, required : false},  // 实际放款总金额（万元)
    loanInterestRate   : {type : Number, required : false},  // 放款利率（%)


    redemptionAmount     : {type : Number, required : false}, // 已赎回数量（吨）
    returnValue          : {type : Number, required : false},  // 已归还金额（万元）
    redemptionAmountLeft : {type : Number, required : false},  // 待赎回数量（吨）
    repaymentValue : {type : Number, required : false},   // 待还款（万元）

    remark : {type : String, required : false},


    infoCoalType   : {type : String, required : false}, // 煤种
    infoCalorificValue   : {type : String, required : false}, // 热值
    infoSulfur   : {type : String, required : false}, // 收到基硫分
    infoVolatile  : {type : String, required : false}, // 空干基挥发分


    paymentList : [{type : Schema.Types.ObjectId, ref : 'paymentOrder'}],
    contactList : [{type : Schema.Types.ObjectId, ref : 'contact'}],


    auditHistory: [
        {
            userId    : { type: String },
            status    : { type: String },
            action    : { type: String },
            updatedAt : { type : Date, default : Date.now }
        }
    ]

});

const financeOrderModel = mongoose.model('financeOrder', financeOrderSchema);

module.exports = financeOrderModel;