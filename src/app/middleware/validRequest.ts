import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validReuest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation check
      // if everything allright next();
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};