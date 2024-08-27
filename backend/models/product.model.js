import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    materials: {
      type: Array,
      required: true,
    },
    craftingMethod: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // Reference to the Company schema
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
