import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import {Link, useLocation, useNavigate} from "react-router-dom"
import axios from 'axios';

function RSVPQrCode() {

  const location = useLocation()
  const postId = location.pathname.split("/")[2]
  console.log(postId)
  const [rsvpData, setRsvpData] = useState(null);

  // Function to fetch RSVP data from a server-side endpoint

  useEffect (() => {
    const fetchRsvpData = async () => {
      try{
        const res = await axios.get(`/posts/${postId}/qrcode`);
        console.log(res)
        const data = await res.data
        setRsvpData(data);
      }catch(err){
        console.log(err)
      }
    };
    fetchRsvpData();
  }, [postId]);

 

  // Render QR code with RSVP data
  return (
    <div>
      {rsvpData && (
        <>
          <QRCode value={JSON.stringify(rsvpData)} />
          <p>{rsvpData.desc}</p>
          <p>{rsvpData.email}</p>
          <p>{rsvpData.date}</p>
          <p>{rsvpData.eventLocation}</p>
        </>
      )}
    </div>
  );
}

export default RSVPQrCode;
