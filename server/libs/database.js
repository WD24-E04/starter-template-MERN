import mongoose from "mongoose";

export default function connectDB() {
  mongoose.connection.on("connected", () => {
    console.log(
      `✅ Database connection established successfully:\n` +
        `   Database Name: "${mongoose.connection.name}"\n` +
        `   Host: ${mongoose.connection.host}\n` +
        `   Port: ${mongoose.connection.port}`
    );
  });

  mongoose.connection.on("error", (error) => {
    console.error("❌ Database connection error:", error.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ Database connection lost. Reconnecting...");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔄 Database reconnected successfully.");
  });

  mongoose.connect(process.env.DB_URI);
}
