import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from 'path'


// configure env
dotenv.config();

// database connect
connectDb();


// rest object
const app = express();

// middle wares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>");
})

// PORT
const PORT = 8080; // default 8080

// run listen
app.listen(PORT,()=> {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
})