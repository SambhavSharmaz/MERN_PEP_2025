const { Product } = require("../../../Models/product_schema.js");

const createProdController = async (req, res) => {
  try {
    const data = req.body;
    console.log("Creating product...", data);

    const createdProduct = await Product.create(data);

    return res.status(200).json({
      isSuccess: true,
      message: "Product created successfully",
      data: {
        product: createdProduct,
      },
    });
  } catch (err) {
    console.error("Error creating product", err);

    return res.status(400).json({
      isSuccess: false,
      message: "Error creating product",
      data: null,
    });
  }
};

const createAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    return res.status(200).json({
      isSuccess: true,
      message: "All products fetched successfully",
      data: {
        products: allProducts,
      },
    });
  } catch (err) {
    console.log("Error fetching all products", err);
    return res.status(500).json({
      isSuccess: false,
      message: "Error fetching all products",
      data: null,
    });
  }
};

const updateProdController = async (req, res) => {
  try {
    const prodId = req.params.prodId;
    const newdata = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(prodId, newdata, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(400).json({
        isSuccess: false,
        message: "Product not found",
        data: null,
      });
    }

    return res.status(200).json({
      isSuccess: true,
      message: "Product updated successfully",
      data: {
        product: updatedProduct,
      },
    });
  } catch (err) {
    console.log("Error updating product", err);
    return res.status(500).json({
      isSuccess: false,
      message: "Error updating product",
      data: null,
    });
  }
};

const deleteProdController = async (req, res) => {
  try {
    const prodId = req.params.prodId;

    const deletedProduct = await Product.findByIdAndDelete(prodId);

    if (!deletedProduct) {
      return res.status(400).json({
        isSuccess: false,
        message: "Product not found",
        data: null,
      });
    }

    return res.status(200).json({
      isSuccess: true,
      message: "Product deleted successfully",
      data: {
        product: deletedProduct,
      },
    });
  } catch (err) {
    console.log("Error deleting product", err);
    return res.status(500).json({
      isSuccess: false,
      message: "Error deleting product",
      data: null,
    });
  }
};

module.exports = {
  createProdController,
  createAllProducts,
  updateProdController,
  deleteProdController,
};
