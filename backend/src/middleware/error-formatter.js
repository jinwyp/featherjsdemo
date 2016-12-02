/**
 * Created by JinWYP on 02/12/2016.
 */


const error = require('feathers-errors/handler');

// Just like Express your error middleware needs to be
// set up last in your middleware chain.


module.exports = error({
    html: function(error, req, res, next) {

        var result = {
            "success" : false,
            "error": {
                "code": error.code,
                "name": error.name,
                "field": error.errors,
                "message": error.message
            },
            "meta": null,
            "data": null
        };

        // render your error view with the error object
        res.send(result);
    }
});


process.on('unhandledRejection', (reason, p) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});