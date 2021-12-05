import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import authRouter from "./routes/auth";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import { DatabaseConnectionError } from "./errors/database-connection-error";

const app = express();
app.set("trust proxy", true);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test", // only provide to request from https, set it to false if u want to unit test
  })
);
app.use(authRouter);

app.use("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
