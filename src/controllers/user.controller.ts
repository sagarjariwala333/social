import { NextFunction, Request, Response } from "express"
import userService from "../services/user.service"
import { IUser } from "../models/user.model"
import { getHashPassword } from "../utility/password.utility"

class UserController {

    insertUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.body as IUser
            user.password = await getHashPassword(user.password)
            const dbUser = await userService.addUser(user)
            res.status(200).send({ message: 'User added successfully', data: dbUser })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.body as Partial<IUser>
            const { id } = req.params
            const dbUser = await userService.updateUser(user, id)
            res.status(200).send({ message: 'User updated successfully', data: dbUser })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            await userService.deleteUser(id)
            res.status(200).send({ message: 'User deleted successfully' })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    getuserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const user = await userService.getUserById(id)
            res.status(200).send({ message: 'User fetched successfully', data: user })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await userService.getusers()
            res.status(200).send({ message: 'All users fetched successfully', data: users })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

}

export default new UserController