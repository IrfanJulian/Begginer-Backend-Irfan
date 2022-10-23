const categoryModel = require('../models/category')

exports.get = (req,res,next) =>{
    categoryModel.getData()
    .then((result)=>{
        res.json({status: 200, message: 'get data success', data: result.rows})
    })
    .catch((error)=>{
        res.json({message: 'error', error})
    })
}

exports.insert = (req, res, next) => {
    categoryModel.insert(req.body)
      .then((result) =>
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