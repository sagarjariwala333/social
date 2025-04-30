import mongoose, { Mongoose, Schema } from "mongoose"

export interface IPost extends Document {
    text: string,
    parent?: string
}

const PostSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    parent: {
        type: mongoose.Schema.ObjectId,
        default: null
    }
})

const Post = mongoose.model('posts', PostSchema)

export default Post