const productModel = require('../models/products')
const commonHelper = require('../helper/common')

    exports.getData = async(req,res,next) =>{
      try {
        const search = req.query.search || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page - 1) * limit || 0;
        const sortBy = req.query.sortBy || 'id';
        const sortList = req.query.sortList || 'asc';
        const result = await productModel.getData({search, page, limit, offset, sortBy, sortList})

        //Pagination
        const {rows: [count]} = await productModel.countData()
        const totalData = parseInt(count.total_products)
        const totalPage = Math.ceil(totalData / limit)
        const pagination = {
          currentPage: page,
          limit,
          totalData,
          totalPage
        }
        // console.log(res);
        commonHelper.response(res,result.rows, 200, 'get data success', pagination)
        // res.send({status: 200, message: 'get data success', pagination, data: result.rows})
      } catch (err) {
        next(err)
      }
    }

    // exports.get = (req,res,next) =>{
    //     const search = req.query.search || "";
    //     const page = parseInt(req.query.page) || 1;
    //     const limit = parseInt(req.query.limit) || 20;
    //     const offset = (page - 1) * limit || 0;
    
    //     const sortBy = req.query.sortBy || "id";
    //     const sortOrder = req.query.sortOrder || "asc";
    //     productModel.getData({search, page, limit, offset, sortBy, sortOrder})

    //     .then(result => res.send({status: 200, message: 'get data success', data: result}))
    //     .catch(err => next(errorServer))
    // },

    // exports.getProduct = async(req,res,next) =>{
    //     try {
    //         const {rows} = await productModel.getData()
    //         res.json({status: 200, message: 'berhasil menampilkan data', data: rows})
    //     } catch (error) {
    //         res.json('error')
    //     }
    // },

    exports.insert = (req, res, next) => {
        const {name,brand,condition,description,stock,id_category,price} = req.body
        const data = {name,brand,condition,description,stock,id_category,price} 
        productModel.insert(data)
          .then(() =>
          commonHelper.response(res, data, 201, 'insert data success')
            // res.send({ status: 200, message: `insert new data success` })
          )
          .catch((err) => next(err));
      },

    // exports.insert = async(req,res,next) =>{
    //     try {
    //         const {id, name, description, stock, price} = req.body
    //         data = {id,name,description, stock, price}
    //         await productModel.insertData(data)
    //         res.json({status: 200, message: 'data berhasil di tambahkan', data: data})
    //     } catch (error) {
    //         res.json('error')
    //     }
    //     // data = [...data,req.body]
    //     // res.json({status: 200, message: 'data berhasil di tambahkan', data: data})
    // },

    exports.update = (req, res, next) => {
        productModel.update(req.params.id, req.body)
          .then((result) =>
            commonHelper.response(res,result.command,202,'update data success')
          )
          .catch((err) => next(err));
      },

    // exports.update = (req,res,next) =>{
    //     productModel.update()
        // let newData = data.map((item)=>{
        //     if(item.id == req.params.id){
        //         return req.body
        //     }else{
        //         return item
        //     }
        // })
        // data = [...newData]
        // res.json({status: 200, message: 'data berhasil di ubah', data: data})
    // },

    exports.delete = (req,res, next) =>{
        productModel.deleteData(req.params.id)
        .then((result)=>{
            commonHelper.response(res,result.command,203,'delete data success')
        })
        .catch((error)=>{
            next(error)
        })
    }
    // exports.delete = (req,res,next) =>{
    //     let id = req.params.id
    //     let newData = data.filter((item)=>{
    //         if(item.id != id){
    //             return item
    //         }
    //     })
    //     data = [...newData]
    //     res.json({status: 200, message: 'data berhasil di hapus', data: data})
    // }