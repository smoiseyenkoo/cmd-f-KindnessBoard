import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import GenericButton from '../../components/GenericButton'
import { useNavigate } from 'react-router-dom';

function Map() {
    var defaultPosition = {
        lat: 49.26247856768246,
        lng: -123.24547308038697
      };
    
    const [markerPosition, setMarkerPosition] = useState([{
      lat: 0,
      lng: 0
    }]);

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
      console.log(defaultPosition);
    };
    let navigate = useNavigate();

    const handleClick = () => {
      const second_last = markerPosition[markerPosition.length - 2];
      const final_loc = [second_last.lat, second_last.lng];
      const body = {lat: final_loc[0], lng: final_loc[1]}
      console.log(final_loc);
      //const title = "test-title"

      //console.log(JSON.stringify(body) + "this is second last")
      fetch(`http://localhost:8000/new-board/test-title`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body), //undefined
      }).then((response) => {
        console.log("here it is: " + JSON.stringify(response));
      });

      
      // const addMarkers = async (location) => {
      //   fetch(`http://localhost:8000/new-board/${title}`, {
      //     method: 'POST',
      //     body: JSON.stringify(second_last)
      //   })
      //   .then(resopnse => response.json())
      //   .then(temp => {setMarkerPosition(temp);})
      // }

      // addMarkers(second_last);

      navigate('/board'); 
    };

    // const { isLoaded } = useLoadScript({
    //   id: 'google-map-script',
    //   googleMapsApiKey: 'AIzaSyByWfjubELtGoOn1nMQ6e26d95180yn3',
      
    // });
    // const { isLoaded } = useJsApiLoader({
    //   id: 'google-map-script',
    //   googleMapsApiKey: 'AIzaSyByWfjubELtGoOn1nMQ6e26d95180yn3',
    //   libraries: ['geometry', 'drawing'],
    // });
     


    return (
      <div>
        {/* {isLoaded && <GoogleMap
                onLoad={console.log("savedMap")}
                // mapContainerClassName={classes.mapContainer}
                // mapContainerStyle={containerSize}
                // center={DefaultCenterPoint}
                // options={options}
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
          </GoogleMap>} */}
            {/* <LoadScript
          googleMapsApiKey="AIzaSyByWfjubELtGoOn1nMQ6e26d95180yn3-w"> */}
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
        {/* </LoadScript> */}
      <div className='map-button'>
        
      <GenericButton onClick={handleClick} label="click to find more boards near you" color="#efbbf0"/>
      </div>
        </div>
    );

}

export default Map;