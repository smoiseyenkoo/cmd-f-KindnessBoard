import React, { useState , useEffect} from 'react';
import { GoogleMap, LoadScript, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import GenericButton from '../../components/GenericButton'
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/Popup.js'

function Map() {
    var defaultPosition = {
        lat: 49.26247856768246,
        lng: -123.24547308038697
      };
    
const [markerPosition, setMarkerPosition] = useState([defaultPosition, defaultPosition]);
const [open, setOpen] = useState(false);
const [boards, setBoards] = useState(null);
const [requestBody, setRequestBody] = useState(null);
const [titleValue, setTitleValue] = useState("");

useEffect(() => {
  fetch("http://localhost:8000/boards")
  .then(response => response.json())
  .then (temp => setBoards(temp))
}, []);
console.log("boards is " + JSON.stringify(boards));

    const click = (e) => {
      setMarkerPosition((current) => [
        current[1],
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
        
      ]);
      console.log("Click position: " + markerPosition[0]);
    };
    let navigate = useNavigate();

    const handleButtonClick = () => {
      console.log(markerPosition[0]);
      setRequestBody(markerPosition[0]);
      setOpen(true);
    };

    const handleBoardSubmit = () => {
      console.log(titleValue);
      fetch(`http://localhost:8000/new-board/${titleValue}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody),
      }).then((response) => {
        console.log("Board created? " + JSON.stringify(response.body.created));
      });
      navigate('/board'); 
    }

    const Popup = ({ text, closePopup }) => {
      return (
        <div className="popup-container">
         <div className="popup-body">
          <h1>{text}</h1>
          <input type='text' onBlur={(event) => {setTitleValue(event.target.value)}}></input>
          <button type='submit' onClick={handleBoardSubmit}>Submit</button>
          <button onClick={closePopup}>Close X</button>
         </div>
        </div>
      );
    };

    let addMarkers = boards.map(function(board) {
      return <Marker position={{ lat: board.lat, lng: board.lon }} />;
    });
    
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
              {addMarkers}
          </GoogleMap>
      <div className='map-button'>
        
      <GenericButton onClick={handleButtonClick} label="new board" color="#efbbf0"/>
      </div>
      <div>
{open ? <Popup text="Input title!" closePopup={() => setOpen(false)}/> : null}
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