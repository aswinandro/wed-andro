import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import "../styles/home.css";
import {
  makeStyles,
  Card,
  Container,
  CardActions,
  Button,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import TimelineChk from "../components/Timelinechk";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import vid from "../assets/land.mp4";

const Home = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  const location = useLocation();

  console.log(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        console.log(res);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="mainHome">
      <div className="blur"></div>
      <Box sx={{ flexGrow: 1, background: "transparent" }}>
        <Grid container spacing={1} sx={{ background: "transparent" }}>
          <Grid xs={12}>
            <div className="containVid">
              <Grid
                className="overlay"
                sx={{
                  fontSize: "300%",
                  textAlign: "center",
                  fontFamily: "Monospace",
                  letterSpacing: 10,
                }}
              >
                Nila's Events
              </Grid>
              <video className="myVideo" autoPlay loop muted>
                <source src={vid} type="video/mp4" />
              </video>
            </div>
          </Grid>
          <Grid
            xs={6}
            maxWidth="md"
            className="containerMat"
            sx={{ background: "transparent" }}
          >
            <div className="home">
              <div class="blur"></div>
              <div className="timeline">
                <Grid xs={12}>
                  {currentUser ? (
                    <Box
                      sx={{
                        paddingLeft: "5%",

                        flexGrow: 1,
                        height: 450,
                        overflowY: "scroll",
                        background: "transparent",
                        "&::-webkit-scrollbar": { width: "0.4em" },
                        "&::-webkit-scrollbar-track": {
                          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          backgroundColor: "rgba(0,0,0,.1)",
                          outline: "1px solid slategrey",
                        },
                      }}
                    >
                      {posts.map((post) => (
                        <Box
                          variant="outlined"
                          sx={{
                            background: "transparent",
                            borderBottom: 1,
                            borderColor: "grey.400",
                          }}
                        >
                          <Grid className="post" key={post.id}>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {post.title}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {getText(post.desc)}
                            </Typography>

                            <CardActions sx={{ background: "transparent" }}>
                              <Link className="link" to={`post/${post.pid}`}>
                                <button>Click to View</button>
                              </Link>
                            </CardActions>
                          </Grid>
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Grid>
                      <Link to="/login">
                        <Box
                          sx={{ textAlign: "center", m: 1 }}
                          className="timeline"
                        >
                          Login to See Invites
                        </Box>
                      </Link>
                    </Grid>
                  )}
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid xs={6} className="timeline">
            <TimelineChk> </TimelineChk>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
