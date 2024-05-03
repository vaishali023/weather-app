import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from 'react-map-gl';

import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Search/>
      <Map
      mapboxAccessToken="<Mapbox access token>"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
        />
    </div>
  );
}

export default App;
