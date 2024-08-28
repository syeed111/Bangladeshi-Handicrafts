import express from "express";
import {
  createProduct,
  getProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", createProduct);
router.get("/", getProduct);

export default router;
