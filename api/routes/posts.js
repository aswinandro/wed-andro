import express from "express"
import { addPost, deletePost, getPost, getPosts, updatePost, getPostQR } from "./controllers/post.js"

const router = express.Router()

router.get("/",getPosts)
router.get("/:id",getPost)
router.get("/:id/qrcode",getPostQR)
router.post("/",addPost)
router.delete("/:id",deletePost)
router.put("/:id",updatePost)
export default router