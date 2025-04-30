import Express from "express"
import imageController from "../controllers/image.controller"
import upload from "../utility/file.utility"

const imageRouter = Express.Router()

imageRouter.all('/error', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });
imageRouter.get('/', imageController.retrieveAllImages)
imageRouter.post('/', upload.single('file') , imageController.uploadImages)
imageRouter.get('/:filename', imageController.downloadImages)

export default imageRouter