import express from "express"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"
import multer from "multer"


const app = express()

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null,uniqueSuffix + '-' + file.originalname)
    }
  })

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log("Inside Up")
    const file = req.file
    res.status(200).json({'message': "Image Has Been Uploaded",
                           'filename': file.filename})
  })

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

app.listen(8800, ()=>{
    console.log("Connected")
})