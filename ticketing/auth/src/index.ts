import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";

import authRouter from "./routes/auth";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import { DatabaseConnectionError } from "./errors/database-connection-error";

const app = express();

app.use(json());

app.use(authRouter);

app.use("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("connected to mongodb database");
  } catch (error) {
    console.log(error);
    throw new DatabaseConnectionError();
  }
};

app.listen(3000, () => {
  console.log(`Listening on port 3000!`);
});
