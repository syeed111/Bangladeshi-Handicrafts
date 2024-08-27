import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.productName || !product.image || !product.companyId) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all the data" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("error in createProduct controller:", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};
