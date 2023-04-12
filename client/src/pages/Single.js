import React, { useState, useEffect, useContext } from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import { Card, Typography, Button } from "antd";

const Single = () => {
  const { Title, Text } = Typography;

  const [post, setPost] = useState([]);

  const cat = useLocation().search;

  const location = useLocation();

  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  console.log(location);

  console.log("ythis " + postId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <div className="user">{/* <img src={post.image}></img> */}</div>
        <div className="info">
          <span>{post.username}</span>
          <p>Created {moment(post.date).fromNow()}</p>
        </div>
        {currentUser.username === post.username && (
          <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt=""></img>
          </div>
        )}
        <h1>{post.gname}</h1>
        <div>{post.bname}</div>
        <div>{post.gaddress}</div>
        <div>{post.baddress}</div>
        <div>{post.venue}</div>
        <div>{post.eventstartdate}</div>
        <div>{post.eventenddate}</div>
        <div>{post.lat}</div>
        <div>{post.lng}</div>
        <div>{post.contact}</div>
        {getText(post.desc)}
      </div>

      <Link className="link" to={`getqr`}>
        <h1>{post.title}</h1>
        <button>For QR</button>
      </Link>
    </div>
  );
};

export default Single;
