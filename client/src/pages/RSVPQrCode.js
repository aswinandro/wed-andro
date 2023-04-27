import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "../styles/single.css";

function RSVPQrCode() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  console.log(postId);
  const [rsvpData, setRsvpData] = useState(null);

  // Function to fetch RSVP data from a server-side endpoint

  useEffect(() => {
    const fetchRsvpData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}/qrcode`);
        console.log(res);
        const data = await res.data;
        setRsvpData(data);
        console.log("Simple" + res.data.lat + "," + res.data.lng);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRsvpData();
  }, [postId]);

  // Handler function for Google Calendar
  const handleGoogleCalendarClick = () => {
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      rsvpData.title
    )}&dates=${rsvpData.eventstartdate}/${
      rsvpData.eventenddate
    }&details=${encodeURIComponent(
      rsvpData.gname + rsvpData.bname + rsvpData.desc
    )}&location=${encodeURIComponent(rsvpData.lat + "," + rsvpData.lng)}`;
    window.open(googleCalendarUrl);
  };

  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("gcal")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL);
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  // Handler function for Apple Calendar
  const handleAppleCalendarClick = () => {
    const appleCalendarUrl =
      `data:text/calendar;charset=utf8,` +
      `BEGIN:VCALENDAR\n` +
      `VERSION:2.0\n` +
      `BEGIN:VEVENT\n` +
      `URL:${document.URL}\n` +
      `DTSTART:${rsvpData.eventstartdate}\n` +
      `DTEND:${rsvpData.eventenddate}\n` +
      `SUMMARY:${rsvpData.title}\n` +
      `DESCRIPTION:${rsvpData.desc}\n` +
      `LOCATION:${rsvpData.lat + "," + rsvpData.lng}\n` +
      `END:VEVENT\n` +
      `END:VCALENDAR\n`;
    const downloadLink = document.createElement("a");
    downloadLink.href = encodeURI(appleCalendarUrl);
    downloadLink.download = `${rsvpData.title}.ics`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Handler function for Microsoft Calendar
  const handleMicrosoftCalendarClick = () => {
    const microsoftCalendarUrl = `https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&startdt=${
      rsvpData.eventstartdate
    }&enddt=${rsvpData.eventenddate}&subject=${encodeURIComponent(
      rsvpData.title
    )}&location=${encodeURIComponent(
      rsvpData.lat + "," + rsvpData.lng
    )}&body=${encodeURIComponent(rsvpData.desc)}`;
    window.open(microsoftCalendarUrl);
  };

  // Render QR code with RSVP data
  return (
    <div>
      <div className="blur"></div>
      <Box sx={{ flexGrow: 1, paddingTop: "5%", paddingLeft: "1%" }}>
        <Grid container spacing={2}>
          <Grid xs={4}></Grid>
          <Grid xs={4}>
            {rsvpData && (
              <>
                <QRCode value={JSON.stringify(rsvpData)} />
                <p>Scan to See Details</p>
              </>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={4}></Grid>
          <Grid xs={4}>
            {rsvpData && (
              <>
                <QRCode
                  id="gcal"
                  value={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                    rsvpData.title
                  )}&dates=${moment(rsvpData.eventstartdate).format(
                    "YYYYMMDD[T]HHmm"
                  )}/${moment(rsvpData.eventenddate).format(
                    "YYYYMMDD[T]HHmm"
                  )}&details=${encodeURIComponent(
                    rsvpData.desc
                  )}&location=${encodeURIComponent(
                    rsvpData.lat + "," + rsvpData.lng
                  )}`}
                />
                <p>QR Google Calendar</p>
                <div className="qrButton">
                  <input
                    type="button"
                    className="download-btn"
                    value="Download"
                    onClick={downloadQRCode}
                  />
                  <button onClick={handleGoogleCalendarClick}>
                    Add to Google Calendar
                  </button>
                </div>
              </>
            )}
          </Grid>
          <Grid xs={4}>
            <button onClick={handleAppleCalendarClick}>
              Add to Apple Calendar
            </button>
            <button onClick={handleMicrosoftCalendarClick}>
              Add to Microsoft Calendar
            </button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default RSVPQrCode;
