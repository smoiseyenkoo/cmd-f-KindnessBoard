import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GenericButton from '../../components/GenericButton'
import { useNavigate } from 'react-router-dom';

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
    let navigate = useNavigate();

    const handleClick = () => {
      const second_last = markerPosition[markerPosition.length - 2];
      const final_loc = [second_last.lat, second_last.lng];
      console.log(final_loc);
      navigate('/board'); 
    };
     


    return (
      <div>
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
      <div className='map-button'>
        
      <GenericButton onClick={handleClick} label="click to find more boards near you" color="#efbbf0"/>
      </div>
        </div>
    );

}

export default Map;