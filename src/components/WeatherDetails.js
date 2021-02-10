import React from 'react'
import moment from 'moment'

function WeatherDetails({ showWeatherDetails, weather, date }) {
  const [selected, setSelected] = React.useState('')
  const { daily, hourly, current } = weather

  const getNavItem = ({ target }) => {
    return setSelected(target.innerText)
  }

  const HourlyDetails = () => {
    return (
      <div className="weekly-forecast-container pt-2 sm:pt-5 col-span-full sm:pb-5">
        <div className="grid grid-cols-1 justify-self-center sm:grid-cols-8">
          {
            hourly.filter((value, index) => {
              return index < 8
            }).map(({ dt, temp, weather }, index) => {
              return (
                <div key={index} className="grid grid-cols-3 items-center	sm:grid-cols-1 sm:justify-self-center	sm:text-center">
                  <p className="text-xs sm:text-base">{moment.unix(dt).utc().format('HH:mm')}</p>
                  <p className="text-xs sm:text-lg">{parseInt(temp)}&deg;</p>
                  {/* <p>{moment(date).format('HH')}</p> */}
                  <div className="flex items-center sm:flex-col">
                    {weather.map(({ description, icon }, index) => {
                      return (
                        <div className="p-0 m-0 flex sm:flex-col justify-center items-center" key={index}>
                          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} className="w-10 sm:w-16"></img>
                          <p className="capitalize text-xs">{description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  const WeeklyDetails = () => {
    return (
      <div className="weekly-forecast-container pt-2 sm:pt-5 sm:pb-5">
        <div className="grid grid-cols-1 justify-self-center sm:grid-cols-8">
          {
            daily ? daily.map(({ dt, temp, weather }, index) => {
              return (
                <div key={index} className="grid grid-cols-3 items-center	sm:grid-cols-1 sm:justify-self-center	sm:text-center">
                  <p className="text-xs sm:text-base">{moment.unix(dt).utc().format('ddd')}</p>
                  <p className="text-xs sm:text-lg">{parseInt(temp.max)}&deg;
                      <span className="font-thin text-xs sm:text-lg">{parseInt(temp.min)}&deg;</span>
                  </p>
                  <div className="flex items-center">
                    {weather.map(({ description, icon }, index) => {
                      return (
                        <div className="p-0 m-0 flex sm:flex-col justify-center items-center" key={index}>
                          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} className="w-10 sm:w-16"></img>
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
    )
  }

  const Details = () => {
    return (
      <div className="weekly-forecast-container pt-2 sm:pt-5 sm:pb-5">
        <div className="grid grid-cols-1 justify-self-center sm:grid-cols-8">
          {
            daily ? daily.map(({ dt, temp, weather }, index) => {
              return (
                <p></p>
              )
            }) : null
          }
        </div>
      </div>
    )
  }

  const RenderWeatherSection = () => {
    switch (selected) {
      case 'Weekly':
        return <WeeklyDetails />
      case 'Hourly':
        return <HourlyDetails />
      case 'Details':
        return <Details />
      default:
        return <WeeklyDetails />
    }
  }
  return (
    <div className="details-container col-span-full p-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, .25)", backdropFilter: "blur(5px)" }}>
      <div className="grid grid-cols-3 border-b pb-4 sm:place-items-center">
        <p className="col-span-1 cursor-pointer hover:text-yellow-500" onClick={e => getNavItem(e)}>Weekly</p>
        <p className="col-span-1 cursor-pointer hover:text-yellow-500" onClick={e => getNavItem(e)}>Hourly</p>
        <p className="col-span-1 cursor-pointer hover:text-yellow-500" onClick={e => getNavItem(e)}>Details</p>
      </div>

      <RenderWeatherSection />
    </div>
  )
}

export default WeatherDetails