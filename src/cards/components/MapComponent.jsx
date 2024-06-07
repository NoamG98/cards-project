import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import useCards from "../hooks/useCards";
import { Box } from "@mui/material";

const containerStyle = {
  width: "320px",
  height: "320px",
};

export default function MapComponent({ cardData }) {
  const { addressForMap, mapCenter } = useCards();
  const [center, setCenter] = useState({ lat: 31.77838, lng: 35.17582 });

  useEffect(() => {
    if (cardData?.length && cardData[0]?.address) {
      addressForMap(cardData[0].address);
    }
  }, [addressForMap, cardData]);

  useEffect(() => {
    if (mapCenter && !isNaN(mapCenter.lat) && !isNaN(mapCenter.lng)) {
      setCenter(mapCenter);
    }
  }, [mapCenter]);

  return (
    <Box sx={{ width: "100%", height: "320px" }}>
      <LoadScript googleMapsApiKey="AIzaSyAzJC2Wa-XenlNK-TL28BBNjDLaZbYBn-M">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={center === mapCenter ? 10 : 6.5}
        >
          {center === mapCenter && <Marker position={center} />}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
}
