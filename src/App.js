import './App.css';
import React, {useState} from 'react';
import { Header } from "./components/Header";
import { Weather } from './components/Weather';
import { LocationForm } from './components/LocationForm';
import { getGeocode } from 'use-places-autocomplete';

function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = React.useState([]);
  const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  
  // Get weather from Open weatther API using the lat, lng from the input in LocationForm
  const getWeather = ({lat, lng}) => {
    const weather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${OPENWEATHER_API_KEY}&units=imperial`;
    fetch(weather)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Error: ", error));
  }

  return (
    <div className="App">
      <Header/>
        <main>
          <h3>Not sure what to wear? <br/>
          Enter your location to get outfit ideas for the current weather!</h3>
          <LocationForm 
            getWeather={getWeather}
            setLocation = {setLocation}
          />  
        {weather.current != undefined && 
          <Weather
            weather ={weather}
            location = {location}
          />    
        } 
        </main>
    </div>
  );
}

export default App;
