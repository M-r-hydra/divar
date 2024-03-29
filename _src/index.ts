// Express
import express from "express";
// Express

// Moduels
import "dotenv/config";
// Moduels

import { connectToDB } from "./config/mongoose/mongoose.config";

async function main() {
  const app = express();
  connectToDB();
  app.listen(process.env.PORT, () => {
    console.clear();
    console.log(`server started in => localhost:${process.env.PORT}`);
  });
}

try {
  main();
} catch (err) {
  console.log(err);
}
