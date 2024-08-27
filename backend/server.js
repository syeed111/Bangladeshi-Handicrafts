import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import companyRoutes from "./routes/company.route.js";
import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/company", companyRoutes);
app.use("/api/product", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at localhost 5000");
});

//database: ss5clISNj6nBRhLM
