import express, { Express, Request, Response, NextFunction } from 'express';
class ValidateAuthApis {
  async validateSignUpRequest(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('validateFunction fghfghfg');
      next();
    } catch (err) {
      next(err);
    }
  }
}
const validateAuthApis = new ValidateAuthApis();
export { validateAuthApis };
