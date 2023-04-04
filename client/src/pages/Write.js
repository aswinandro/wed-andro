import axios from 'axios';
import React,  { useState, useEffect }  from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import "../style.scss"

const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [gname, setGname] = useState(state?.gname || "");
  const [bname, setBname] = useState(state?.bname || "");
  const [gaddress, setGaddress] = useState(state?.gaddress || "");
  const [baddress, setBaddress] = useState(state?.baddress || "");
  const [venue, setVenue] = useState(state?.venue || "");
  const [contact, setContact] = useState(state?.contact || "");
  const [email, setEmail] = useState(state?.email || "");
  const [eventdate, setEventdate] = useState(state?.eventdate || "");
  // const [lat,  ] = useState(state?.lat || "");
  // const [lng, ] = useState(state?.lng || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('state?.cat' || "Sim");
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 0,
    lng: 0
  };
  
  const mapOptions = {
    disableDefaultUI: true
  };
  const [position, setPosition] = useState(center);
  const [marker, setMarker] = useState(null);

  const apiKey = 'AIzaSyAZF74sub1jRoA54JdbS0wuSP7l87T3UYg';

  const upload = async () =>{
    try{
      const formData = new FormData();
      formData.append("file",file)
      const res = await axios.post("/upload",formData)
      return (res.data,
      console.log(res.data))
    }  catch(err){
      console.log(err)
    }
  }

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
      lng: latLng.lng()
    });
  };

  const handleSaveClick = () => {
    console.log(marker)
    fetch('/save-location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(marker)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const handleClick = async e=>{
    e.preventDefault()
    const imgUrl= await upload()
    try{
      state ? await axios.put(`/posts/${state.id}`,{
        title: title,desc:value,cat,img: file? imgUrl: ""
      }) : 
      await axios.post(`/posts/`,{
        title,
        gname,
        bname,
        gaddress,
        baddress,
        venue,
        desc:value,
        img: file? imgUrl: "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        eventdate,
        cat,
        lat: marker.lat,
        lng: marker.lng,
        contact,
        email
      })
      .then(function (res) {
        alert(res.data)
        console.log(res);
      })
      // return alert("Success")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' value={title} placeholder='Wedding Title or Quote' onChange={e=>setTitle(e.target.value)}/>
        <input type='text' value={gname} placeholder='Grooms Name' onChange={e=>setGname(e.target.value)}/>
        <input type='text' value={bname} placeholder='Brides Name' onChange={e=>setBname(e.target.value)}/>
        <input type='text' value={gaddress} placeholder='Groom Address' onChange={e=>setGaddress(e.target.value)}/>        <input type='text' value={bname} placeholder='Brides Name' onChange={e=>setBname(e.target.value)}/>
        <input type='text' value={baddress} placeholder='Brides Address' onChange={e=>setBaddress(e.target.value)}/>
        <input type='text' value={venue} placeholder='Venue ' onChange={e=>setVenue(e.target.value)}/>
        <input type='text' value={contact} placeholder='Telephone or Mobile Number' onChange={e=>setContact(e.target.value)}/>
        <input type='date' value={eventdate} onChange={e=>setEventdate(e.target.value)}/>
        <input type='email' value={email} placeholder='E - Mail' onChange={e=>setEmail(e.target.value)}/>
        <div className='editorContainer'>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div>
        </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span> Status: Draft</span>
          <span> Visibility: Public</span>
          <input style={{display:"none"}} type="file" id="file" name='' onChange={e=>setFile(e.target.files[0])}/>
          <label htmlFor='file'>Upload Image</label>
          <div className='buttons'>
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
  )
}

export default Write