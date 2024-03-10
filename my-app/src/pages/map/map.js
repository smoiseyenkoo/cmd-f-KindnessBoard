import React, { useState , useEffect} from 'react';
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

const [boards, setBoards] = useState(null);
useEffect(() => {
  fetch("http://localhost:8000/boards")
  .then(response => response.json())
  .then (temp => setBoards(temp))
}, [])
console.log(boards); // boards is now [lat], [long]
console.log("boards is " + JSON.stringify(boards));

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

    const handleButtonClick = () => {
      const second_last = markerPosition[markerPosition.length - 2];
      const final_loc = [second_last.lat, second_last.lng];
      const req_body = {"lat": final_loc[0], "lng": final_loc[1]};
      console.log(final_loc);
      const title = "test-title4";

      fetch(`http://localhost:8000/new-board/${title}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body),
      }).then((response) => {
        console.log("Board created? " + JSON.stringify(response.body));
      });
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
        
      <GenericButton onClick={handleButtonClick} label="select this location" color="#efbbf0"/>
      </div>
      {/* <div className="popup">
            <div className="popup-inner">
                <h2>Input title for new board!</h2>
                <form onSubmit={}>
                    <label>
                        <input type="text"/>
                    </label>
                    <button type="submit">Enter</button>
                </form>
                {/* <button onClick={props.toggle}>Close</button> */}
            {/* </div> */}
      {/* </div> */}
        </div>
    );

}

export default Map;