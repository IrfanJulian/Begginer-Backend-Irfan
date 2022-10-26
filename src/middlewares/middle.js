const stock = (req, res, next) => {
    const { stock, name, condition, description, id_category, price} = req.body;
    try {
      if (stock <= 0) throw new Error('Stock minimal 1');
      if (name == '') throw new Error('Input product name');
      if (condition == '') throw new Error('Choose your product condition')
      if (description == '') throw new Error('Input Description Product')
      if (id_category <= 0) throw new Error('Check Id Category')
      if (price <= 0) throw new Error('Input price')
    } catch (err) {
      return res.status(401).json({message : err.message});
    }
    next();
  };

  module.exports ={
    stock
  }