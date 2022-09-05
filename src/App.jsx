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
    <div className='
    w-screen 
    h-screen 
    relative 
    bg-black/40 
    text-white 
    before:bg-[url("assets/sunset.jpg")] 
    before:bg-cover 
    before:bg-center 
    before:bg-no-repeat 
    before:absolute 
    before:w-full 
    before:h-screen 
    before:top-0 
    before:left-0 
    before:-z-10 ' >
      <div className="
      text-center 
      p-4">
        <input
          className='
          py-3 
          px-6
          text-xl
          rounded-3xl
          border-solid
          border-2
          bg-white/10
          placeholder:text-white
          '
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className='
      max-w-2xl 
      h-[700px]
      m-auto 
      px-4 
      top-0 
      relative 
      flex 
      flex-col 
      justify-between'>
        <div className='
        w-full 
        mx-auto
        my-auto'>
          <div>
            <span className='
            text-2xl 
            font-bold '>{data.name} </span>
            <div className="
            text-6xl 
            font-bold">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="
            relative 
            -right-3/4
            bottom-1/2 
            origin-[0_0]
            -rotate-90">
              {data.weather ? <span className='text-2xl'>{data.weather[0].main}</span> : null}
            </div>
          </div>
        </div>
        {data.name !== undefined &&
          <div className="
          flex
          justify-evenly
          text-center
          w-full
          my-4
          mx-auto
          p-4
          rounded-xl
          bg-white/20">
            <div>
              {data.main ? <p className='text-2xl'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p className='font-bold'>Feels Like</p>
            </div>
            <div>
              {data.main ? <p className='text-2xl'>{data.main.humidity}% </p> : null}
              <p className='font-bold'>Humidity</p>
            </div>
            <div>
              {data.wind ? <p className='text-2xl'>{data.wind.speed.toFixed()}MPH</p> : null}
              <p className='font-bold'>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default App