import path from "path"
import Image, { IImage } from "../models/images.model"

class ImageService {
    
    uploadImage = async (image: string) => {
        return await Image.create({ image: image })
    }

    retrieveAllImages = async () => {
        return await Image.find()
    }

}

export default new ImageService()