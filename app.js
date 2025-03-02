import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Database connection
connectDB();

// Configure CORS
app.use(cors({
  origin: "http://localhost:3000", // Update this to your frontend URL
  credentials: true
}));

// Middleware registration
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route registration
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("FinManager Server is working");
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
