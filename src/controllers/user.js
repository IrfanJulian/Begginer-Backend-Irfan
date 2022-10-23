const userModel = require('../models/user')

exports.getData = async(req,res,next) =>{
    try {
        const result = await userModel.getData()
        res.send({status: 200, message: 'get data success', data: result.rows})
    } catch (error) {
        res.send({message: 'error', error})
    }
}

// exports.getData = (req,res,next) =>{
//     userModel.getData()
//     .then((result)=>{
//         res.send({status: 200, message: 'get data success', data: result.rows})
//     })
//     .catch((error)=>{
//         res.send({message: 'error', error})
//     })
// }

exports.insertData = (req,res,next) =>{
    userModel.insertData(req.body)
    .then((result)=>{
        res.send({status: 200, message: 'add data success'})
    })
    .catch((error)=>{
        res.send({message: 'error', error})
    })
}

exports.updateData = (req, res, next) =>{
    userModel.updateData(req.params.id, req.body)
    .then((result)=>{
        res.json({status: 200, message: 'update data success'})
    })
    .catch((error)=>{
        res.json({message: 'error', error})
    })
}

exports.deleteData = (req,res,next) =>{
    userModel.deleteData(req.params.id)
    .then((result)=>{
        res.send({status: 200, message: 'delete data success'})
    })
    .catch((error)=>{
        res.send({message: 'error', error})
    })
}