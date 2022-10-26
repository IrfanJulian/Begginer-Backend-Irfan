const categoryModel = require('../models/category')
const commonHelper = require('../helper/common')

exports.get = (req,res, next) =>{
    categoryModel.getData()
    .then((result)=>{
        commonHelper.response(res, result.rows, 200, 'Get category success')
    })
    .catch((error)=>{
        next(error)
    })
}

exports.insert = (req, res) => {
    categoryModel.insert(req.body)
      .then((result) =>
        // commonHelper(res, 200, 'update data success')
        res.send({ status: 200, message: `insert new data success` })
      )
      .catch((err) => res.send({ message: "error", err }));
  }

exports.update = (req,res,next) =>{
    categoryModel.update(req.params.id, req.body)
    .then((result)=>{
        res.json({status: 200, message: 'update data success'})
    })
    .catch((error)=>{
        res.json({message: 'error', error})
    })
}

exports.deleteData = (req,res,next) =>{
    categoryModel.deleteData(req.params.id)
    .then((result)=>{
        res.json({status: 200, message: 'delete data success'})
    })
    .catch((error)=>{
        res.json({message: 'error', error})
    })
}