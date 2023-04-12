import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Button, FormLabel } from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@mui/material";

// import "../style.scss"

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [gname, setGname] = useState(state?.gname || "");
  const [bname, setBname] = useState(state?.bname || "");
  const [gaddress, setGaddress] = useState(state?.gaddress || "");
  const [baddress, setBaddress] = useState(state?.baddress || "");
  const [venue, setVenue] = useState(state?.venue || "");
  const [contact, setContact] = useState(state?.contact || "");
  const [email, setEmail] = useState(state?.email || "");
  const [eventstartdatetime, setEventstartdatetime] = useState(
    state?.eventstartdatetime || ""
  );
  const [eventenddatetime, setEventenddatetime] = useState(
    state?.eventenddatetime || ""
  );

  // const [lat,  ] = useState(state?.lat || "");
  // const [lng, ] = useState(state?.lng || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("state?.cat" || "Sim");
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [message, setMessage] = useState("");
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 0,
    lng: 0,
  };

  const mapOptions = {
    disableDefaultUI: true,
  };
  const [position, setPosition] = useState(center);
  const [marker, setMarker] = useState(null);

  const apiKey = "AIzaSyAZF74sub1jRoA54JdbS0wuSP7l87T3UYg";

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data, console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition({ lat: coords.latitude, lng: coords.longitude });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const handleMapClick = (event) => {
    const { latLng } = event;
    setMarker({
      lat: latLng.lat(),
      lng: latLng.lng(),
    });
  };

  const handleSaveClick = () => {
    console.log(marker);
    fetch("/save-location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marker),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title: title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios
            .post(`/posts/`, {
              title,
              gname,
              bname,
              gaddress,
              baddress,
              venue,
              desc: value,
              img: file ? imgUrl : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
              eventstartdatetime,
              eventenddatetime,
              cat,
              lat: marker.lat,
              lng: marker.lng,
              contact,
              email,
            })
            .then(function (res) {
              // alert(res.data);
              setMessage(res.data);
              setOpen(true);
              setSeverity("success");
              console.log(res);
            });
      // return alert("Success")
    } catch (err) {
      setMessage(err);
      setOpen(true);
      setSeverity("error");
      console.log(err);
    }
  };

  return (
    <div className="add">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      <div className="content">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="title">Wedding Title</InputLabel>
            <Input
              id="title"
              value={title}
              placeholder="Wedding Title or Quote"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="gname">Groom Name</InputLabel>
            <Input
              id="gname"
              value={gname}
              placeholder="Groom"
              onChange={(e) => setGname(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="bname">Bride's Name</InputLabel>
            <Input
              id="bname"
              value={bname}
              placeholder="Bride's Name"
              onChange={(e) => setBname(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="gaddress">Groom's Address</InputLabel>
            <Input
              id="gaddress"
              value={gaddress}
              placeholder="Groom's Address"
              onChange={(e) => setGaddress(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="baddress">Bride's Address</InputLabel>
            <Input
              id="baddress"
              value={baddress}
              placeholder="Bride's Address"
              onChange={(e) => setBaddress(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="venue">Venue</InputLabel>
            <Input
              id="venue"
              value={venue}
              placeholder="Venue | Location Name | Auditorium | Hall | Landmark"
              onChange={(e) => setVenue(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="eventstartdatetime">
              Event Start Date
            </InputLabel>
            <Input
              id="eventstartdatetime"
              label="Next appointment"
              type="datetime-local"
              value={eventstartdatetime}
              onChange={(e) => setEventstartdatetime(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="eventenddatetime">Event End Date</InputLabel>
            <Input
              id="eventenddatetime"
              type="datetime-local"
              value={eventenddatetime}
              onChange={(e) => setEventenddatetime(e.target.value)}
            />
          </FormControl>
        </Box>
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="contact">Contact</InputLabel>
            <Input
              id="contact"
              value={contact}
              placeholder="Enter Mobile Number for Contact"
              onChange={(e) => setContact(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ s: 1 }} variant="standard">
            <InputLabel htmlFor="email">Email ID</InputLabel>
            <Input
              id="email"
              value={email}
              placeholder="Enter E-Mail ID"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </Box>
        {/* <input
          type="text"
          value={title}
          placeholder="Wedding Title or Quote"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={gname}
          placeholder="Grooms Name"
          onChange={(e) => setGname(e.target.value)}
        />
        <input
          type="text"
          value={bname}
          placeholder="Brides Name"
          onChange={(e) => setBname(e.target.value)}
        />
        <input
          type="text"
          value={gaddress}
          placeholder="Groom Address"
          onChange={(e) => setGaddress(e.target.value)}
        />{" "}
        <input
          type="text"
          value={bname}
          placeholder="Brides Name"
          onChange={(e) => setBname(e.target.value)}
        />
        <input
          type="text"
          value={baddress}
          placeholder="Brides Address"
          onChange={(e) => setBaddress(e.target.value)}
        />
        <input
          type="text"
          value={venue}
          placeholder="Venue "
          onChange={(e) => setVenue(e.target.value)}
        />
        <input
          type="text"
          value={contact}
          placeholder="Telephone or Mobile Number"
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="datetime-local"
          value={eventstartdatetime}
          onChange={(e) => setEventstartdatetime(e.target.value)}
        />
        <input
          type="datetime-local"
          value={eventenddatetime}
          onChange={(e) => setEventenddatetime(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="E - Mail"
          onChange={(e) => setEmail(e.target.value)}
        /> */}
      </div>
      <div></div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span> Status: Draft</span>
          <span> Visibility: Public</span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={15}
            options={mapOptions}
            onClick={handleMapClick}
          >
            {marker && <Marker position={marker} />}
          </GoogleMap>
          {marker && <button onClick={handleSaveClick}>Save Location</button>}
        </LoadScript>
      </div>
    </div>
  );
};

export default Write;
