import mongoose from "mongoose"

export interface IImage extends Document {
    image: string
}

const ImageSchema = new mongoose.Schema({
    image: {
        type: String,
        require: false
    }
})

const Image = mongoose.model('images', ImageSchema)

export default Image