import Express from "express"
import userRouter from "./user.router"
import authRouter from "./auth.router"
import postRouter from "./post.router"
import imageRouter from "./image.router"

const router = Express.Router()

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/image', imageRouter)

export default router