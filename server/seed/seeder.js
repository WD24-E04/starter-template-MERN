import mongoose from "mongoose";
import "dotenv/config";

import User from "../models/User.js";
import users from "./usersData.js";

(async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to MongoDB");

    await User.deleteMany({});
    console.log("Existing users deleted.");

    await User.insertMany(users);
    console.log("5 users seeded successfully.");
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed.");
  }
})();
