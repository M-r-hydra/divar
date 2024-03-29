// Mongoose
import mongoose from "mongoose";
// Mongoose

// Moduels
import "dotenv/config";
// Moduels

export const connectToDB = () =>
  mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.clear();
      console.log("err in connect to mongodb");
      console.log(err?.message ?? "UnExpected Error In DB ;X");
    });
