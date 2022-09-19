import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbconnect = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database");
      return 200;
    })
    .catch((err) => {
      console.log(err.message);
      return 500;
    });
  return conn;
};
