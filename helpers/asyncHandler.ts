import { NextFunction, Response } from "express"

export const asyncWrapper = async(
   callbackFn: () => Promise<Response> | Response | any, 
   res: Response, 
   next: NextFunction
) => {
     try {
        const response = await callbackFn()
        return response
     } catch (error: any) {
        return next(Error(error));
     }
}