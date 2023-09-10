import express, { Express, Request, Response, NextFunction } from "express";
import { templateConstants } from "../../../common/templateConstant";

class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("authController");

      res.locals.response = {
        body: {
          data: "work",
        },
        message: templateConstants.CREATE_SUCCESS("user"),
      };
      next();
    } catch (err) {
      console.log("sdfsdjfsewrwerewe", err);
      next(err);
    }
  }
}
const authController = new AuthController();
export { authController };
