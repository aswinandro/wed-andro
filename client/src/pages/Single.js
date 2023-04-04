import React, { useState, useEffect, useContext } from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link, useLocation, useNavigate} from "react-router-dom"
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext';
import { Card, Typography, Button } from 'antd';



const Single = () => {

  const { Title, Text } = Typography;

  const [post, setPost] = useState([]);

  const cat  = useLocation().search

  const location = useLocation()

  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)

  console.log(location)
  
  useEffect (() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try{
      const res = await axios.delete(`/posts/${postId}`);
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  
  return (
    <div className='single'>
       <div className='content'>
         
        <div className='user'>
          <img src={post.image}></img>
        </div>
        <div className='info'>
          <span>{post.username}</span>
          <p>Posted {moment(post.date).fromNow()}</p>
        </div>
        {currentUser.username === post.username && (
          <div className='edit'>
            <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt=""/>
            </Link>
            <img onClick={handleDelete} src={Delete} alt=""></img>
          </div>
        )}
          <h1>{post.gname}</h1>
          {getText(post.desc)}
       </div>

       <Card
        style={{ backgroundColor: '#fff1e6', borderRadius: 16 }}
        cover={
          <div style={{ height: 300, backgroundImage: `url('/wedding-bg.jpg')`, backgroundSize: 'cover', borderRadius: '16px 16px 0 0', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 24px 32px 24px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '0 0 16px 16px' }}>
              <Title level={2} style={{ marginBottom: 16 }}>You're Invited!</Title>
              <Text style={{ fontSize: 18 }}>We're getting married and we want you to be there to celebrate with us!</Text>
            </div>
          </div>
        }
      >
        <div style={{ padding: 24 }}>
          <Title level={3}>Details</Title>
          <Text style={{ fontSize: 18 }}>Date: Saturday, June 25, 2023</Text>
          <br />
          <Text style={{ fontSize: 18 }}>Time: 4:00 PM</Text>
          <br />
          <Text style={{ fontSize: 18 }}>Location: The Grand Ballroom, 123 Main Street, Anytown USA</Text>
        </div>
        <div style={{ textAlign: 'center', paddingBottom: 24 }}>
          <Button type="primary" size="large" style={{ backgroundColor: '#ffadad', borderColor: '#ffadad', marginRight: 16 }}>RSVP Now</Button>
          <Button size="large" style={{ backgroundColor: '#ffd6a5', borderColor: '#ffd6a5' }}>Learn More</Button>
        </div>
      </Card>
       
       <Link className="link" to={`getqr`}>
                <h1>{post.title}</h1>
                <button>For QR</button>
        </Link>
       <Menu></Menu>
    </div>
  )
}

export default Single