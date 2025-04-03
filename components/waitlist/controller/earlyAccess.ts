import { NextFunction, Request, Response } from "express";
import { asyncWrapper } from "../../../helpers/asyncHandler";
import earlyAccessModel from "../models/earlyAccessModel";
import { responseHandler } from "../../../helpers/responseHandlers";
import partershipModel from "../models/partnershipModel";

export const getEarlyAccess = (req: Request, res: Response, next: NextFunction) => 
    asyncWrapper(async () => {
        await earlyAccessModel.create(req.body)
        responseHandler({
            message: "Early access request submitted successfully",
            res,
            statusCode: 200
        })
    }, res, next)
  
export const sendMessage = (req: Request, res: Response, next: NextFunction) => 
    asyncWrapper(async () => {

    }, res, next)

export const partership = (req: Request, res: Response, next: NextFunction) => 
    asyncWrapper(async () => {
       await partershipModel.create(req.body)
        responseHandler({
            message: "Partership request submitted successfully",
            res,
            statusCode: 200
        })
    }, res, next)  