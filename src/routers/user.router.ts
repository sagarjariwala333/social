import Express from "express"
import userController from "../controllers/user.controller"
import userBodyValidator from "../validators/user.validator"
import validateRequest from "../utility/validate.utility"
import updateUserBodyValidator from "../validators/updateUser.validator"

const userRouter = Express.Router()

userRouter.get('/:id', userController.getuserById) 
userRouter.get('/', userController.getUsers)
userRouter.patch('/:id', updateUserBodyValidator, validateRequest, userController.updateUser)
userRouter.post('/', userBodyValidator, validateRequest , userController.insertUser)
userRouter.delete('/:id', userController.deleteUser)

export default userRouter