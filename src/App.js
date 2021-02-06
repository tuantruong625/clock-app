import React from 'react';
import axios from 'axios'
import moment from 'moment'

import useToggle from '../src/utils/utils'
import Greeting from '../src/components/Greeting'
import Quote from './components/Quote';
import WeatherDetails from './components/WeatherDetails'

function App() {
  const [showWeatherDetails, setWeatherDetails] = useToggle()
  const [date, setDate] = React.useState(new Date())
  const [latitude, setLatitude] = React.useState('')
  const [longitude, setLongitude] = React.useState('')
  const [weather, setWeather] = React.useState('')
  const apiKey = 'e4e0caaee4a4f16be0f9f4d58e05756f'

  const refreshClock = React.useCallback(() => {
    setInterval(() => {
      setDate(new Date())
    }, 60 * 1000);
  }, [])

  const getCurrentLocationData = React.useCallback(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])

  const getWeather = React.useCallback(async () => {
    try {
      // const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      const data = response.data
      setWeather(data)
    } catch (e) {
      console.log(e.message)
    }
  }, [longitude, latitude])

  React.useEffect(() => {
    refreshClock();
    getCurrentLocationData()
    getWeather()

    return () => {
      clearInterval(refreshClock);
    }
  }, [refreshClock, getCurrentLocationData, getWeather])

  const time = moment(date).format('HH:mm')


  return (
    <div className="container mx-auto">
      <div className="h-screen text-white grid grid-cols-3 gap-4">
        <Quote />
        <div className="col-span-full self-end flex flex-col sm:flex-row sm:justify-between	sm:items-end p-8 sm:p-24">
          <div className="location-info pb-5">

            <Greeting date={date} />
            <p className="py-5 font-bold text-8xl uppercase">{time}</p>
            <p className="uppercase">in {weather.name}</p>
          </div>

          <div className="details-button pt-10">
            <button className="bg-white text-gray-500 h-10 w-28  rounded-full flex items-center justify-between px-1" onClick={setWeatherDetails}>
              <span className="uppercase tracking-wide pl-2">{showWeatherDetails ? 'Less' : 'More'}</span>
              <span className="bg-gray-800 rounded-full h-8 w-8 text-gray-100 flex items-center justify-center">{showWeatherDetails ? '⇧' : '⇩'}</span>
            </button>
          </div>
        </div>

        <WeatherDetails showWeatherDetails={showWeatherDetails} date={date} weather={weather} />
      </div>
    </div >
  );
}

export default App;
