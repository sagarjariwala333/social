import Express from 'express'
import postController from '../controllers/post.controller'

const postRouter = Express.Router()

postRouter.get('/', postController.getAllPosts)
postRouter.get('/:id', postController.getPostById)
postRouter.patch('/:id', postController.updatePost)
postRouter.post('/', postController.addPost)
postRouter.delete('/:id', postController.deletePost)

export default postRouter