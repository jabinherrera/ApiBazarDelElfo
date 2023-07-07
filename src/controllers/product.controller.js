import ProductModel from "../models/product.model.js";

async function createProduct(req, res) {
    try {
      const productCreated = await ProductModel.create(req.body);
      res.send(productCreated);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function editProductById(req, res) {
    try {
      const productId = req.params.productId;
      const name = req.body.name;
      const price = req.body.price;
      const description = req.body.description;
      const images = req.body.images;
      const stock = req.body.stock;
      const product = await ProductModel.updateOne({ _id: productId }, { name, price, description, images, stock });
      res.send(product);
    } catch (err) {
        console.log(err)
      res.status(500).send(err);
    }
  }

  async function deleteProductById(req, res) {
    try {
      const productId = req.params.productId;
      const product = await ProductModel.deleteOne({ _id: productId });
      res.send(product);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function listProduct(req, res) {
    try {
      const products = await ProductModel.find({});
      res.send(products);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  export {
    createProduct,
    editProductById,
    deleteProductById,
    listProduct,
  };