import { NextFunction, Request, Response } from "express";
import { IPost } from "../models/post.model";
import postService from "../services/post.service";

class PostController {

    addPost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const post = req.body as IPost
            const dbPost = await postService.uploadPost(post)
            res.status(200).json({ message: 'Post uploaded successfully', data: dbPost })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    updatePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const post = req.body as Partial<IPost>
            const { id } = req.params
            const dbPost = await postService.editPost(post, id)
            res.status(200).json({ message: 'Post edited successfully', data: dbPost })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    deletePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const dbPost = await postService.deletePost(id)
            res.status(200).json({ message: 'Post deleted successfully' })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dbPosts = await postService.getPosts()
            res.status(200).json({ message: 'Post fetched successfully', data: dbPosts })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    getPostById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const dbPosts = await postService.getPostById(id)
            res.status(200).json({ message: 'Post fetched successfully', data: dbPosts })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

}

export default new PostController