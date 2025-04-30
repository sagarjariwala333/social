import { NextFunction, Request, Response } from "express";
import imageService from "../services/image.service";
import path from "path";

class ImageController {

    retrieveAllImages = async (req: Request, res: Response, next: NextFunction) => {
        const arr = await imageService.retrieveAllImages()
        res.status(200).json({ message: 'Images retrieved successfully', data: arr })
    }

    uploadImages = async (req: any, res: Response, next: NextFunction) => {
        try {
            const fileName  = req.file.filename
            const result = await imageService.uploadImage(fileName)
            res.status(200).json({ message: 'Image added successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' })
        }
    }

    downloadImages = async (req: Request, res: Response, next:  NextFunction) => {
        try {
            const fileName = req.params.filename
            const filepath = path.resolve(__dirname, '../..', 'uploads')
            res.download(`${filepath}/${fileName}`)
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' })
        }
    }

}

export default new ImageController()