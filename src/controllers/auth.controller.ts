import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/user.model";
import userService from "../services/user.service";
import { compareHashPassword } from "../utility/password.utility";
import { signToken } from "../utility/jwt.utility";

class AuthController {
    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body as Pick<IUser, 'email' | 'password'>
            const user = await userService.getUserByEmail(email)
            const flag = await compareHashPassword(password, user.password)
            if (!flag) {
                res.status(401).json({ message: 'Password mismatch'})
                return
            }
            const token = await signToken(user.id)
            res.status(200).json({ message: 'Login successful', data: { token } })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default new AuthController()