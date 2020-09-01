const path = require('path');
var db = require(path.join(__dirname,"../models/index"));
var Product = db.product;

exports.create = (req, res) => {
    const product = new Product({
        id:req.body.id,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:req.body.image

    })

    product.save(product)
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Error Occured while creating the product"
        });
    });
};

exports.findAll=(req,res)=>
{
    Product.find({})
    .then(data=>res.send(data))
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });    
};


exports.findOne = (req,res)=>
{

    Product.find({id:req.params.id})
    .then(data=>res.send(data))
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });    
};

exports.delete = (req, res) =>{
    
    Product.findByIdAndRemove({id:req.params.id})
    .then(data => {
        if (!data){
            res.status(404).send({
                message: `Product id:${id} not found`
            });
        }
        else {
            res.send({
                message: "Product deleted successfully"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Deletion issue"
        });
    });
};

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update`
          });
        } else res.send({ message: "Product was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating"
        });
      });
  };