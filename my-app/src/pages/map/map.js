import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import GenericButton from '../../components/GenericButton'
import { useNavigate } from 'react-router-dom';


function Map() {
    var defaultPosition = {
        lat: 49.26247856768246,
        lng: -123.24547308038697
      };
    
    const [markerPosition, setMarkerPosition] = useState([
      {
}, {}]);

    const click = (e) => {
      setMarkerPosition((current) => [
        ...current,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
        
      ]);

      defaultPosition = markerPosition[markerPosition.length - 1];
      console.log("b");
      console.log(defaultPosition);
    };
    let navigate = useNavigate();

    const handleClick = () => {
      navigate('/board'); 
    };

    const bro = () => {
      const second_last = markerPosition[markerPosition.length - 2];
      const final_loc = [second_last.lat, second_last.lng];
      navigate('/board'); 
    };

    console.log(markerPosition);
    
    return (
      <div>
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
      <div className='map-button'>
        
      <GenericButton onClick={handleClick} label="click to go back to previous board" color="#efbbf0"/>
      </div>
      <div className='bro-button'>
      <GenericButton onClick={bro} label="confirm location"/>
      </div>
      <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={bro}>
                    <label>
                        Username:
                        <input type="text" value={""} 
                        // onChange={e => setUsername(e.target.value)} />
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
                {/* <button onClick={props.toggle}>Close</button> */}
            </div>
      </div>
        </div>
    );

}

export default Map;