import React from "react";
import { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { stamenTerrain } from "pigeon-maps/providers";
import axios from "axios";
import "./style/mapLocation.scss";

export default function MapLocation() {
  //creating IP state
  const [ip, setIP] = useState([]);
  const [center, setCenter] = useState([50.879, 4.6997]);
  const [zoom, setZoom] = useState(11);

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");

    setIP(res.data);
  };

  const getPolution = async () => {
    const res = await axios.get(
      /*       `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${ip.latitude}&lon=&${ip.longitude}&appid=4c1d21b242779c2b8701e52520d60a7b` */
      `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${ip.latitude}&lon=${ip.longitude}&appid=4c1d21b242779c2b8701e52520d60a7b`
    );
    return res;
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
    getPolution();
  }, []);
  return (
    <section
      id="map"
      className="solutions w-50 text-center font-noto flex flex-col gap-0 color-white"
    >
      <div className="mapContainer">
        <div className="contentContainer">
          <div className="contentText">
            <h1>
              {ip.city}, {ip.country_name},{ip.state}
            </h1>
            <h1>The current pollution levels in are</h1>
            <p>Not looking so good</p>
          </div>
          <div className="contentImage"></div>
        </div>
        <div className="map">
          <Map
            className="map"
            height={300}
            center={center}
            defaultZoom={zoom}
            provider={stamenTerrain}
            dprs={[1, 2]}
            onBoundsChanged={({ center, zoom }) => {
              setCenter(center);
              setZoom(zoom);
            }}
          >
            <Marker width={50} anchor={[ip.latitude, ip.longitude]} />
          </Map>
        </div>
      </div>
    </section>
  );
}
