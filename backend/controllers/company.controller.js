import mongoose from "mongoose";
import Company from "../models/company.model.js";

export const createCompany = async (req, res) => {
  const company = req.body;

  if (!company.picture || !company.name || !company.description) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newCompany = new Company(company);
  try {
    await newCompany.save();
    res.status(201).json({ success: true, data: newCompany });
  } catch (error) {
    console.log("error in creating product:", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};
