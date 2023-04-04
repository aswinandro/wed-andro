import React, { useState, useEffect } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';
const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat  = useLocation().search

  const location = useLocation()


  console.log(location)
  useEffect (() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  }, []);

 
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../../../api/uploads/${post.img}`} alt=""/>
            </div>
            <div className='content'>
              <Link className="link" to={`post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home