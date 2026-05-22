const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

connectDB();

const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});