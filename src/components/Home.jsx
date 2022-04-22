import React, { useEffect, useState } from 'react';
import http from '../api/http-common';
import './style/home.scss';

export default function Home() {
  const [pollutionData, setPollutionData] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    http()
      .get('/test')
      .then((resp) => {
        console.log('data', resp.data);
        setPollutionData(resp.data);
      });

    return () => {};
  }, []);

  return (
    <div className="home flex flex-col items-center color-primary">
      <div className="font-bold text-3xl md:text-7xl hover:text-blue-300 pb-5">
        Pollution Data
      </div>
      <div className="flex flex-wrap gap-4">
        {/* {pollutionData.map((data) => ( ))} */}
      </div>
    </div>
  );
}
