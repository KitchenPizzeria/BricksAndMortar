import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import axios from "axios";

const mapboxToken =
  "pk.eyJ1Ijoic2tvb2IxOTA1IiwiYSI6ImNrdnpsMno5ODEyeTkydnFpOWwyZ3FvdDAifQ.9vgCrgGU7nedtj9ciPxl7w";

function Map() {
  const [chosenLocation, setChosenLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 51.5045,
    longitude: -0.0865,
    zoom: 11,
  });

  const [marker, setMarker] = useState({
    latitude: 51.5045,
    longitude: -0.0865,
  });

  const properties = [
    {
      price: "£ 213,498", // The Shard
      name: "Shard",
      latitude: 51.504501,
      longitude: -0.0865,
    },
    {
      price: "£ 147,203,401", // London Eye
      name: "London Eye",
      latitude: 51.503399,
      longitude: -0.119519,
    },
    {
      price: "£ 213,498",
      latitude: 53,
      longitude: 51.6145,
    },
  ];

  const latlonURL =
    "https://maps.googleapis.com/maps/api/geocode/json?address=E162GR,+UK&sensor=false";

  const getCoordinates = (address) => {
    axios
      .post("https://maps.googleapis.com/maps/api/geocode/json?address=", {
        params: {
          address: address,
          key: API_KEY,
        },
      })
      .then((data) => {
        const latitude = data.results.geometry.location.lat;
        const longitude = data.results.geometry.location.lng;
        console.log(data);
        console.log({ latitude, longitude });
      });
  };

  return (
    <ReactMapGl
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {properties.map((property) => {
        const { name, latitude, longitude } = property;
        console.log(property);
        <Marker latitude={latitude} longitude={longitude}>
          <h1>{name}</h1>
        </Marker>;
      })}
    </ReactMapGl>
  );
}

export default Map;
