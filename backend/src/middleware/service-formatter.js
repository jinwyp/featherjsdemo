/**
 * Created by JinWYP on 01/12/2016.
 */

module.exports = function(req, res) {
    var result = {
        "success" : true,
        "error": null,
        "meta": null,
        "data": null
    };

    if (typeof res.data.total !== 'undefined'){
        result.data = res.data.data;
        result.meta = {
            "count": res.data.total < res.data.limit ? res.data.total : res.data.limit,
            "offset": res.data.skip,
            "numberPerPage" : res.data.limit,
            "page": Math.floor(res.data.skip/res.data.limit),
            "total": res.data.total
        };
    }else if (typeof res.data.code === 'undefined' && typeof res.data.name === 'undefined'){
        result.data = res.data;
    }else{
        result.success = false;
        result.error = {
            "code": res.data.code,
            "name": res.data.name,
            "field": res.data.errors,
            "message": res.data.message
        };
    }


    res.format({
        'application/json': function(){
            res.send(result);
        }
    });
}


