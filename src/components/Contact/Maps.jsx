import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { Container } from '@mui/material'
import ReactDOMServer  from 'react-dom/server'


const Maps = () => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtZXNoLTIwMDIiLCJhIjoiY2xramNhanJqMDBsajNkbzFqZ3dvdmg5ZyJ9.hOm1J6baf1AT7r_CSAavZQ';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(80.22);
    const [lat, setLat] = useState(13.00);
    const [zoom, setZoom] = useState(9);

    const container = <div style={{overflowY:'scroll',height:'70px'}}>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
    </div>
    console.log(ReactDOMServer.renderToString(container))



    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
        const markersvg = `<svg height="50" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="25" fill="red"></circle>
        <text style="font-size: 20px;" x="50%" y="60%" text-anchor="middle" fill="white">10</text>
      </svg>`
        var el = document.createElement('div');
        el.innerHTML = markersvg
        const marker = new mapboxgl.Marker({
            element: el,
        })
            .setLngLat([lng, lat])
            .setPopup(new mapboxgl.Popup().setHTML(ReactDOMServer.renderToString(container)))
            .addTo(map.current);
    });

    return (
        <div>
            <div ref={mapContainer} style={{ height: "400px" }} className="map-container" />
        </div>
    );
}

export default Maps