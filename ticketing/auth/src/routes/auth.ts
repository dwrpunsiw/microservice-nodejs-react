import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

import { User } from "../models/user";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("hi there!");
});

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;

    // console.log(`Creating a user ...`);
    // throw new DatabaseConnectionError();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("User is already exists");
      return res.send({});
    }

    res.send({});
  }
);

router.post("/api/users/signin", (req, res) => {
  res.send("hi there!");
});

router.post("/api/users/signout", (req, res) => {
  res.send("hi there!");
});

export default router;
