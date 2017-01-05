'use strict';


const handler  = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger   = require('./logger');

const errorFormatter = require('./error-formatter');

module.exports = function () {
    // Add your custom middleware here. Remember, that
    // just like Express the order matters, so error
    // handling middleware should go last.
    const app = this;


    app.use(function(req, res, next){
        res.locals.staticPathAdmin = '/static/admin';
        next();
    });

    app.get('/warehouse/admin/login', (req, res, next) => res.render('login'));


    app.get('/warehouse/admin/home/demo/dashboard', (req, res, next) => res.render('platform/demoDashboard'));
    app.get('/warehouse/admin/home/demo/echart', (req, res, next) => res.render('platform/demoEchart'));

    app.get('/warehouse/admin/home/session/info', (req, res, next) => res.render('platform/sessionInfo'));
    app.get('/warehouse/admin/home/session/password', (req, res, next) => res.render('platform/sessionModifyPassword'));

    app.get('/warehouse/admin/home/userlist', (req, res, next) => res.render('platform/userList'));
    app.get('/warehouse/admin/home/user/add', (req, res, next) => res.render('platform/userInfo'));
    app.get('/warehouse/admin/home/user/:id', (req, res, next) => res.render('platform/userInfo'));
    app.get('/warehouse/admin/home/user/:id/edit', (req, res, next) => res.render('platform/userInfo'));

    app.get('/warehouse/admin/home/companylist', (req, res, next) => res.render('platform/companyList'));
    app.get('/warehouse/admin/home/company/add', (req, res, next) => res.render('platform/companyInfo'));
    app.get('/warehouse/admin/home/company/:id', (req, res, next) => res.render('platform/companyInfo'));
    app.get('/warehouse/admin/home/company/:id/edit', (req, res, next) => res.render('platform/companyInfo'));


    app.get('/warehouse/admin/home/finance', (req, res, next) => res.render('customer/financeOrderList'));
    app.get('/warehouse/admin/home/finance/:id', (req, res, next) => res.render('customer/financeOrderInfo'));
    app.get('/warehouse/admin/home/finance/contract/:id', (req, res, next) => res.render('customer/contractUpload'));


    app.use(notFound());
    app.use(logger(app));
    //app.use(handler());

    app.use(handler({ html: false, json : errorFormatter }));



    process.on('unhandledRejection', (reason, p) => {
        console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
    });




};
