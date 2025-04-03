import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { erroreHandler } from "./responseHandlers";

 export const validateInput =
  (Schema: Joi.ObjectSchema): any => 
  async (req: Request, res: Response, next: NextFunction) => {
    
    const { error } = Schema.validate(req.body);
    if (error) {
        return erroreHandler({
            error: error.details[0].message,
            res,
            statusCode: 400
        })
    }

    next();
}

// export default validateInput;