const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://232030_db:Test1234@ac-norz1mf-shard-00-00.wl88y1l.mongodb.net:27017,ac-norz1mf-shard-00-01.wl88y1l.mongodb.net:27017,ac-norz1mf-shard-00-02.wl88y1l.mongodb.net:27017/patientsDB?ssl=true&replicaSet=atlas-ob8cvk-shard-0&authSource=admin&appName=Cluster0', {
      serverSelectionTimeoutMS: 30000,
      family: 4
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;