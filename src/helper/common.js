const response = (res, result, status, message, pagination) =>{
    const resultPrint = {}
    resultPrint.status = message || 'Success'
    resultPrint.statusCode = status
    resultPrint.data = result
    // resultPrint.message = message || null
    if (pagination)resultPrint.pagination = pagination
    res.status(status).json(resultPrint)
}

// const error = (statusCode, message) =>{
//     const resultPrint = {}
//     resultPrint.statusCode = statusCode
//     resultPrint.message = message
// }

module.exports = {
    response
}