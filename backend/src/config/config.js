import { configDotenv } from "dotenv";
configDotenv();
const config = {
  database: process.env.MONGO_URL,
  jwt_secret: process.env.JWT_SECRET,
};

export default config;
