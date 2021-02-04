import React from 'react';
import moment from 'moment'

import useToggle from '../src/utils/utils'
import Greeting from '../src/components/Greeting'
import Quote from './components/Quote';
import TimeDetails from '../src/components/TimeDetails'

function App() {
  const [showTimeDetails, setTimeDetails] = useToggle()
  const [date, setDate] = React.useState(new Date())
  const [location, setLocation] = React.useState()

  const refreshClock = React.useCallback(() => {
    setInterval(() => {
      setDate(new Date())
    }, 60 * 1000);
  }, [])

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
    })
  }

  React.useEffect(() => {
    refreshClock();
    getLocation();

    return () => {
      clearInterval(refreshClock);
    }
  }, [refreshClock])

  const time = moment(date).format('HH:mm')

  return (
    <div className="container mx-auto">
      <div className="h-screen text-white grid grid-cols-3 gap-4">
        <Quote />

        <div className="col-span-full self-end flex flex-col sm:flex-row sm:justify-between	sm:items-end p-8 sm:p-24">
          <div className="location-info pb-5">
            <Greeting date={date} />
            <p className="py-5 font-bold text-8xl uppercase">{time}</p>
            <p className="uppercase">in kitchener, ontario</p>
          </div>

          <div className="details-button pt-10">
            <button className="bg-white text-gray-500 h-10 w-28  rounded-full flex items-center justify-between px-1" onClick={setTimeDetails}>
              <span className="uppercase tracking-wide pl-2">{showTimeDetails ? 'Less' : 'More'}</span>
              <span className="bg-gray-800 rounded-full h-8 w-8 text-gray-100 flex items-center justify-center">{showTimeDetails ? '⇧' : '⇩'}</span>
            </button>
          </div>
        </div>

        <TimeDetails showTimeDetails={showTimeDetails} date={date} />
      </div>
    </div >
  );
}

export default App;
