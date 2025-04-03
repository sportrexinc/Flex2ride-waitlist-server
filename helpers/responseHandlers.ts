import { Response } from "express"

export const responseHandler = ({
 message,
 res,
 statusCode = 200,
 data
}: {
    res: Response
    statusCode?: number,
    message: string,
    data?: any
}) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    })
}

export const erroreHandler = ({
    error,
    res,
    statusCode = 400
}: {
    res: Response,
    statusCode?: number,
    error: any
}) => {
    return res.status(statusCode).json({
        success: false,
        error
    })
}