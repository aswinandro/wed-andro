import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import Grid from "@mui/material/Unstable_Grid2";
import "../styles/single.css";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const Single = () => {
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
      <div className="blur"></div>
      <Grid container spacing={2} className="invite">
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.title}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.gname}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.gaddress}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.bname}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.baddress}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.venue}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{getText(post.desc)}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.eventstartdate}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.contact}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.email}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.lat}</Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>{post.lng}</Grid>
        <Grid xs={4}></Grid>
      </Grid>

      <Divider light />
      <Grid container spacing={2} className="inviteLow">
        <Grid xs={12}>
          <Stack direction="row" spacing={2}>
            <Link className="link" to={`getqr`}>
              <Button
                color="secondary"
                variant="outlined"
                endIcon={<QrCodeScannerOutlinedIcon />}
              >
                Generate QR
              </Button>
            </Link>
            <Link to={`/write?edit=2`} state={post}>
              <Button
                color="secondary"
                variant="outlined"
                endIcon={<EditOutlinedIcon />}
              >
                Edit
              </Button>
            </Link>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Grid className="author">
              Created {moment(post.date).fromNow()} by
            </Grid>
            <Button
              variant="outlined"
              disabled
              startIcon={<Person2OutlinedIcon />}
            >
              {post.username}
            </Button>
            <Avatar src="/broken-image.jpg" />
          </Stack>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Single;
