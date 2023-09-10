// module import
import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";

// file import
import {
  handle404,
  handleError,
  handleResponse,
} from "./utils/common/requestResponse";
import authRoutes from "./module/authenticate/routes";
import db from "./models/index";
import { config } from "./config/config";

// defiination

const app: Express = express();

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup route
const authRouter = express.Router();
app.use("/api/v1/user", authRouter);
authRoutes.authRoutes(authRouter);

// Success Response
app.use(handleResponse);
app.use(handle404);
app.use(handleError);

app.use((err: any, req: any, res: any, next: any) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

console.log("ddddddddddddddddddddddddddd", process.env.SERVER_PORT);
app.listen(config.serverConfig.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.serverConfig.PORT}`
  );
});

db.sequelize
  .sync({ force: false, alter: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error: any) => {
    console.error("Database connection error", error);
  });
export = app;
