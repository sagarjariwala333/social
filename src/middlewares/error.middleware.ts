import { NextFunction, Request, Response } from "express"
import { ErrorHandle } from "../utility/error.utility"

export const errorMiddleware = (err: Error | ErrorHandle, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err instanceof ErrorHandle ? err.statusCode : 500
    const message = err instanceof ErrorHandle ? err.message : 'Internal server error'

    res.status(statusCode).send({ message })
}