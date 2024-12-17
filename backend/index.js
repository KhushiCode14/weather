import express from "express";
import app from "./src/app.js";
import ConnectDB from "./src/config/db.js";
import config from "./src/config/config.js";
const createServer = () => {
  try {
    ConnectDB();
    const PORT = config.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};
createServer();
