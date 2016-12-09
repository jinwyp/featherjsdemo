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


    app.use(notFound());
    app.use(logger(app));
    //app.use(handler());

    app.use(handler({ html: false, json : errorFormatter }));



    process.on('unhandledRejection', (reason, p) => {
        console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
    });

};
