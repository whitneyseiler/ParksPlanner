import React from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  return (
    <section className="mapContainer">
      <div className="map-overlay">
        <div id="feature-listing" className="listing"></div>
      </div>
      <div id="map"/>
    </section>
  )
}

export default Map;