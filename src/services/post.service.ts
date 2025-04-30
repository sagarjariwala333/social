import Post, { IPost } from "../models/post.model";

class PostService {

    uploadPost = async (post: IPost) => {
        return await Post.create(post)
    }

    editPost = async (post: Partial<IPost>, id: string) => {
        return await Post.findOneAndUpdate({ _id: id}, { post }, { upsert: true, new: true })
    }

    deletePost = async (id: string) => {
        await Post.deleteOne({ _id: id })
    }

    getPosts = async () => {
        const posts = await Post.aggregate([
            {
                $match: { parent: null }
            },
            {
                $graphLookup: {
                    from: "posts",
                    startWith: "$_id",
                    connectFromField: "_id",
                    connectToField: "parent",
                    as: "children",
                    depthField: "level"
                },
            },
            {
                $project: {
                    _id: 1,
                    parent: 1,
                    text: 1,
                    children: {
                        $map: {
                            input: "$children",
                            as: "child",
                            in: {
                                _id: "$$child._id",
                                parent: "$$child.parent",
                                text: "$$child.text",
                                level: "$$child.level"
                            }
                        }
                    }
                }
            }
        ])
        return posts
    }

    getPostById = async (id: string) => {
        return await Post.findOne({ _id: id })
    }
}

export default new PostService