import User, { IUser } from "../models/user.model";

class UserService {
    
    addUser = async (user: IUser) => {
        return await User.create(user)
    }

    updateUser = async (user: Partial<IUser>, id: string) => {
        return await User.findOneAndUpdate({ _id: id }, user, { upsert: true, new: true })
    }
    
    deleteUser = async (id: string) => {
        return await User.deleteOne({ _id: id })
    }

    getUserById = async (id: string) => {
        return await User.findOne({ _id: id })
    }

    getusers = async () => {
        return await User.find()
    }

    getUserByEmail = async (email: string) => {
        return await User.findOne({ email: email })
    }
}

export default new UserService()