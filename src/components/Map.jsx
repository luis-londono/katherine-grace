// src/Map.js
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";
import { GOOGLE_API_KEY } from "../Constants";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 39.00181570846621,
  lng: -94.6315867173098
};



const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_API_KEY,
      version: "beta", // Use the beta version to access AdvancedMarkerElement
    });

    loader
      .load()
      .then(() => {
        const { google } = window; // Ensure google is defined
        if (google) {
          const map = new google.maps.Map(mapRef.current, {
            center,
            zoom: 15,
          });

          // Create an instance of AdvancedMarkerElement
          const marker = new google.maps.marker.AdvancedMarkerElement({
            map,
            position: center,
            title: "Hello World!",
          });

          marker.map = map;
        } else {
          console.error("Google Maps API not loaded properly.");
        }
      })
      .catch((e) => {
        console.error("Error loading Google Maps API:", e);
      });
  }, []);

  return <div ref={mapRef} style={containerStyle}></div>;
}

export default Map;
