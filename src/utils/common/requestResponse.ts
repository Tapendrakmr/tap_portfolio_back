import HTTPErrors from "http-errors";
import createError from "http-errors";
import { ValidationError } from "express-validation";
import express, { Express, NextFunction, Request, Response } from "express";

import stringConstants from "../../common/stringConstant";
import * as utility from "../../common/utility";
import { templateConstants } from "../../common/templateConstant";

const handle404 = (req: any, res: any, next: any) => {
  console.log("erorr 404");
  const err = createError(404, templateConstants.INVALID("Link"));
  next(err);
};

// This middleware generates error response
const handleError = (err: any, req: any, res: any, _next: any) => {
  console.log("habdle Error");
  let error = err;
  if (err instanceof HTTPErrors.HttpError) {
    res.status(err.statusCode || 500);
    res.send({
      code: err.statusCode,
      status: err.status,
      error: true,
      message: err.message,
      data: err.name,
    });
  } else if (err instanceof ValidationError) {
    res.status(err.statusCode || 500);
    res.send({
      code: err.statusCode,
      status: err.statusCode,
      error: true,
      message: err.details,
      data: err.details.body,
    });
  } else {
    error = createError(500, stringConstants.genericMessage.SERVER_ERROR);
    res.status(error.statusCode || 500);
    if (
      utility.isNullOrUndefined(res.locals.responseStatus) ||
      res.locals.responseStatus === false
    ) {
      res.send({
        code: error.subCode,
        status: error.subCode,
        error: true,
        message: error.message,
        data: null,
      });
    }
  }
};

// This middleware generates success response
const handleResponse = (req: any, res: any, next: any) => {
  console.log("hanlde response");
  if (res.locals.response) {
    let response = {
      code: 0,
      status: 200,
      message: res.locals.response.message,
      error: false,
    };
    if (res.locals.response.body) {
      response = {
        ...response,
        ...res.locals.response.body,
      };
    }
    res.locals.responseStatus = true; //response sent
    res.send(response);
  } else {
    next();
  }
};

export { handle404, handleError, handleResponse };
