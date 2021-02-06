import React from 'react'
import SunnyIcon from '../assets/weather-icons/weather_icons-01.svg'
import moment from 'moment'


function TimeDetails({ showTimeDetails, date, weather }) {
  const { daily } = weather
  return (
    showTimeDetails ?
      // <div className="details-container col-span-full bg-gray-100 sm:p-24 sm:py-0">
      <div className="details-container col-span-full bg-white text-gray-700 p-4">
        <div className="grid grid-cols-3 border-b pb-4">
          <p className="col-span-1">Weekly</p>
          <p className="col-span-1">Hourly</p>
          <p className="col-span-1">Details</p>
        </div>

        <div className="weekly-forecast-container pt-2">
          <div className="grid grid-cols-3 items-center">
            {
              daily ? daily.map(({ dt, temp, weather }) => {
                return (
                  <>
                    <p className="text-gray-400 text-xs">{moment.unix(dt).utc().format('ddd')}</p>
                    <p className="text-xs">{parseInt(temp.max)}&deg; <span className="text-gray-400 text-xs">{parseInt(temp.min)}&deg;</span></p>
                    <div className="flex items-center">
                      {weather.map(({ description }) => {
                        return (
                          <>
                            <img src={SunnyIcon} alt="Sunny" className="w-10"></img>
                            <p className="capitalize text-xs">{description}</p>
                          </>
                        )
                      })}
                    </div>
                  </>
                )
              }) : null
            }
          </div>
        </div>

      </div>
      : null
  )
}

export default TimeDetails