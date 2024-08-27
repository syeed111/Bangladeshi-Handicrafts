import mongoose from "mongoose";
const companySchema = new mongoose.Schema(
  {
    picture: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    yearsOfOperation: {
      type: Number,
    },
    numberOfProducts: {
      type: Number,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
