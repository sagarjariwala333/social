import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utility/jwt.utility";
import userService from "../services/user.service";

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['authorization'].split(' ')[1]
        const result = verifyToken(token)
        if(result.id) {
            const user = await userService.getUserById(result.id)
            req.cookies = user
        }
        next()   
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' })
    }
} 