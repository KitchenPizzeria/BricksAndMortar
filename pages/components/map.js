import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

const mapboxToken =
  "pk.eyJ1Ijoic2tvb2IxOTA1IiwiYSI6ImNrdnpsMno5ODEyeTkydnFpOWwyZ3FvdDAifQ.9vgCrgGU7nedtj9ciPxl7w";

function Map(props) {
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

  const latlonURL =
    "https://maps.googleapis.com/maps/api/geocode/json?address=E162GR,+UK&sensor=false";

  // const getCoordinates = (address) => {
  //   axios
  //     .post("https://maps.googleapis.com/maps/api/geocode/json?address=", {
  //       params: {
  //         address: address,
  //         key: API_KEY,
  //       },
  //     })
  //     .then((data) => {
  //       const latitude = data.results.geometry.location.lat;
  //       const longitude = data.results.geometry.location.lng;
  //       console.log(data);
  //       console.log({ latitude, longitude });
  //     });
  // };

  // const markers = React.useMemo(
  //   () =>
  //     props.data.data.map((city) => (
  //       <Marker
  //         key={city.name}
  //         longitude={city.longitude}
  //         latitude={city.latitude}
  //         className="marker"
  //       >
  //         <h1>V</h1>
  //       </Marker>
  //     )),
  //   [props.data]
  // );

  return (
    <ReactMapGl
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    ></ReactMapGl>
  );
}

export default Map;
