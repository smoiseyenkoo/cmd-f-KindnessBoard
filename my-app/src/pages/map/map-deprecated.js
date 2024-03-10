import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map() {
    var defaultPosition = {
        lat: 49.26247856768246,
        lng: -123.24547308038697
      };
    
    const [markerPosition, setMarkerPosition] = useState([]);

    const click = (e) => {
      setMarkerPosition((current) => [
        ...current,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
        
      ]);

      defaultPosition = markerPosition[markerPosition.length - 1];
      console.log(defaultPosition);
    };
    // console.log(markerPosition);
    
    // const click = (event) => {
      
      // setMarkerPosition({
        //     lat: event.latLng.lat(),
        //     lng: event.latLng.lng()
        
        // });
        
        // };
     


    return (
        <LoadScript
      googleMapsApiKey="AIzaSyByWfjubELtGoOn1nMQ6e26d95180yn3-w">
        <GoogleMap
            mapContainerStyle={{ width: '100vw' , height: '100vh' }}
            center={defaultPosition}
            zoom={10}
            onClick = {click}
        >
          {markerPosition.slice(-1).map((marker) => (
        <Marker 
          position={{ 
            lat: marker.lat,
            lng: marker.lng 
          }} />
    ))}
      </GoogleMap>
    </LoadScript>
    );

}

export default Map;