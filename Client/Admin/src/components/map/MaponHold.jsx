import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iYnkxIiwiYSI6ImNsMTBlYjUyZjF4cXczYmtiOTFmbTdiM24ifQ.splZFyAptqIMXvCa_pM9pA';
 
export default function App() {
const mapContainer = useRef(null);
const map = useRef(null);
//const [lng, setLng] = useState(-70.9);
//const [lat, setLat] = useState(42.35);
//const [zoom, setZoom] = useState(9);
const [lng, setLng] = useState( 38.8048);
const [lat, setLat] = useState(9.0060);
const [zoom, setZoom] = useState(16.96);

 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v11',
center: [lng, lat],
zoom: zoom
});
});
 
useEffect(() => {
if (!map.current) return; // wait for map to initialize
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});
});
 
return (
<div>

<div ref={mapContainer} className="map-container" />
</div>
);
}