const errorHandler = (error, request, response, next) => {
    if (error.name === 'ValidationError'){
        return response.status(401).json({error:error.message})
        //yo 400 port chai bad status pathauxa ani error:error.message le chai short j xa validationerror ma tei pathauxa..
    }else if(error.name === 'JsonWebTokenError'){
        return response.status(401).json({error:error.message})
    }
    next(error)
}
//error handle use garya so short form ma error aauxa..
module.exports = {
    errorHandler
}