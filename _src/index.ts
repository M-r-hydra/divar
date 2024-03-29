// Express
import express from "express";
// Express

// Moduels
import "dotenv/config";
// Moduels

import { connectToDB } from "./config/mongoose/mongoose.config";
import * as _swagger from "./config/swagger/swagger.config";

async function main() {
  const app = express();
  connectToDB();

  app.use(
    "/swagger",
    _swagger.default._swagger.serve,
    _swagger.default.swaggerConfing
  );

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
