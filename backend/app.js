const express = require("express");
// const mongoose = require("mongoose");
// const { Sequelize } = require("sequelize");
const cors = require("cors");
const connectMongoDB = require('./db/db');
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectMongoDB();


app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
