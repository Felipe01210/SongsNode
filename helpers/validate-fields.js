const {validationResult} = require('express-validator')

const validateFields = function(req,res,next){
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({Error: errors.errors});
    }

    next()

}

module.exports = { validateFields}