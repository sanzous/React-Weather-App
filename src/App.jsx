import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState({})

  const [location, setLocation] = useState('')

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=819de2384459e48801c719ba81f4d089`
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className='container'>
        <div className='top'>
          <div className="location">
            <span>{data.name} </span>
            <div className="temperature">
              {data.main ? <h1>{data.main.temp.toFixed()}F</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <span>{data.weather[0].main}</span> : null}
            </div>
          </div>


          {data.name !== undefined &&
            <div className="bottom">
              <div className="feelsLike">
                {data.main ? <span>{data.main.feels_like.toFixed()}</span> : null}
              </div>
              <div className="humidity">
                {data.main ? <span>{data.main.humidity} </span> : null}
              </div>
              <div className="wind">
                {data.wind ? <span>{data.wind.speed.toFixed()}MPH</span> : null}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App