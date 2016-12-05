/**
 * Created by JinWYP on 02/12/2016.
 */




// Just like Express your error middleware needs to be
// set up last in your middleware chain.


module.exports = function(error, req, res, next) {

        var result = {
            "success" : false,
            "error": {
                "code": error.code,
                "name": error.name,
                "field": error.errors,
                "message": error.message,
                "stack": error.stack
            },
            "meta": null,
            "data": null
        };

        if (process.env.NODE_ENV === 'production') {
            delete result.error.stack;
        }

        res.set('Content-Type', 'application/json');
        res.json(result)

};

