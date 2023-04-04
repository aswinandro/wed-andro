import {db} from "../../db.js";
import Jwt  from "jsonwebtoken";

export const getPosts = (req,res) => {
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?"
    : " SELECT * FROM posts"

    db.query(q,[req.query.cat], (err,data) =>{
        if(err) return res.status(500).send(err)

        return res.status(200).json(data);
    })
}

export const getPost = (req,res) => {
    const q = "SELECT p.id, `username`, `gname`, `desc`, `image`, `img`, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"

    db.query(q,[req.params.id], (err,data) =>{
        if(err) return res.status(500).send(err)

        return res.status(200).json(data[0])
    })    
 }

 export const getPostQR = (req,res) => {
    const q = "SELECT p.id, `username`, `gname`, `desc`, `image`, `img`, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"

    db.query(q,[req.params.id], (err,data) =>{
        if(err) return res.status(500).send(err)

        return res.status(200).json(data[0])
    })    
 }

export const addPost = (req,res) => {
    console.log("Inside Add Post")
    const token = req.cookies.access_token
    if(!token) res.status(401).json("Not Authenticated!")
   
    Jwt.verify(token,"jwtkey", (err,userInfo)=>{
        if(err) return res.status(403).json("Token is Not Valid")
    
    const q = "INSERT INTO posts(`title`, `gname`, `bname`, `gaddress`, `baddress`, `venue`, `desc`, `img`, `date`, `eventdate`, `cat`, `lat`, `lng`, `contact`, `email`, `uid`) VALUES(?)";
    const values = [
        req.body.title,
        req.body.gname,
        req.body.bname,
        req.body.gaddress,
        req.body.baddress,
        req.body.venue,
        req.body.desc,
        req.body.img,
        req.body.date,
        req.body.eventdate,
        req.body.cat,
        req.body.lat,
        req.body.lng,
        req.body.contact,
        req.body.email,
        userInfo.id,
    ]
    
        //     const q =
        //     "INSERT INTO post(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

        // const values = [
        //     req.body.title,
        //     req.body.desc,
        //     req.body.img,
        //     req.body.cat,
        //     req.body.date,
        //     userInfo.id,
        // ];

        db.query(q,[values], (err,data) =>{
            if(err) return res.status(500).send(err)

            return res.status(201).json("Invitation Has Been Created")
        })   
    })
}

export const deletePost = (req,res) => {
    const token = req.cookies.access_token
    if(!token) res.status(401).json("Not Authenticated!")
   
    Jwt.verify(token,"jwtkey", (err,userInfo)=>{
        if(err) return res.status(403).json("Token is Not Valid")

        const postId = req.params.id
        const q = "DELETE FROM posts where `id` = ? AND `uid` = ?"

        db.query(q,[postId,userInfo.id], (err,data)=>{
            if(err) return res.status(403).json("You can Delete your Post Only")

            return res.status(204).json("Post Has Been Deleted")
        })
    })
}

export const updatePost = (req,res) => {
    const token = req.cookies.access_token
    if(!token) res.status(401).json("Not Authenticated!")
   
    Jwt.verify(token,"jwtkey", (err,userInfo)=>{
        if(err) return res.status(403).json("Token is Not Valid")
    
    const postId = req.params.id
    const q = "UPDATE posts SET `gname=?`, `bname=?`, `title=?`, `gaddress=?`, `baddress=?`, `location=?`, `maplocation=?`,  `desc=?`, `img=?`, `date=?`,`cat=?` WHERE `id` = ? AND `uid` = ?"
    const values = [
        req.body.gname,
        req.body.bname,
        req.body.title,
        req.body.gaddress,
        req.body.baddress,
        req.body.location,
        req.body.maplocation, 
        req.body.desc,
        req.body.image,
        req.body.date,
        req.body.cat,
        userInfo.id,
    ]

        db.query(q,[...values, postId, userInfo.id], (err,data) =>{
            if(err) return res.status(500).send(err)

            return res.status(202).json("Post Has Been Created")
        })   
    })
}
