import React from 'react'
import SunnyIcon from '../assets/weather-icons/weather_icons-01.svg'
import moment from 'moment'


function WeatherDetails({ showWeatherDetails, weather }) {
  const { daily } = weather
  return (
    // showWeatherDetails ?
    <div className="details-container col-span-full p-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, .15)", backdropFilter: "blur(5px)" }}>
      <div className="grid grid-cols-3 border-b pb-4 sm:place-items-center">
        <p className="col-span-1">Weekly</p>
        <p className="col-span-1">Hourly</p>
        <p className="col-span-1">Details</p>
      </div>

      <div className="weekly-forecast-container pt-2 sm:pt-5">
        <div className="grid grid-cols-1 grid-rows-8 justify-self-center sm:grid-cols-8">
          {
            daily ? daily.map(({ dt, temp, weather }, index) => {
              return (
                <div key={index} className="grid grid-cols-3 items-center	sm:grid-cols-1 sm:justify-self-center	sm:text-center">
                  <p className="text-xs sm:text-base">{moment.unix(dt).utc().format('ddd')}</p>
                  <p className="text-xs sm:text-lg">{parseInt(temp.max)}&deg;
                      <span className="font-thin text-xs sm:text-lg">{parseInt(temp.min)}&deg;</span>
                  </p>
                  <div className="flex items-center sm:flex-col">
                    {weather.map(({ description }, index) => {
                      return (
                        <div className="p-0 m-0 flex sm:flex-col justify-center items-center" key={index}>
                          <img src={SunnyIcon} alt="Sunny" className="w-10 sm:w-16"></img>
                          <p className="capitalize text-xs">{description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            }) : null
          }
        </div>
      </div>

    </div>
    // : null
  )
}

export default WeatherDetails