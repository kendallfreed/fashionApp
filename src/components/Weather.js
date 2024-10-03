import "./Weather.css";

export const Weather = ({weather, location}) => {
   // const weatherDescription = weather.current.weather[0].description; 

  return (
    <div>
      <div className="location">
        <p>Showing Results For: {location}</p>
      </div>
      <div className="temp">
        {weather.current ? <h1>{weather.current.temp.toFixed()}°F</h1> : null}
      </div>
      <div className="description">
        {weather.current ? <p>{weather.current.weather[0].main}</p> : null}
        {/* This is the description we want to save and then use to search with the AI */}
      </div>

      {weather != undefined &&
          <div className="secondary">
            <div className="feels">
              <p>Feels Like</p>
              {weather.current ? <p className="bold">{weather.current.feels_like.toFixed()}°F</p> : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {weather.current ? <p className="bold">{weather.current.humidity}</p> : null}
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {weather.current ? <p className="bold">{weather.current.wind_speed} MPH</p> : null}
            </div>
          </div>
      }
    </div>
  )
}
