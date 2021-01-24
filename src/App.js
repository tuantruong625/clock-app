import React from 'react';
import axios from 'axios'
import TimeDetails from '../src/components/TimeDetails'
import useToggle from '../src/utils/utils'
import moment from 'moment'

function App() {
  const [showTimeDetails, setTimeDetails] = useToggle()
  const [quote, setQuote] = React.useState(null)
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  const getRandomQuote = React.useCallback(async () => {
    const response = await axios.get('https://api.quotable.io/random')
    setQuote(response.data)
  }, [])


  React.useEffect(() => {
    getRandomQuote();
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    }
  }, [getRandomQuote])

  const time = moment(today).format('HH:hh')

  return (
    <div className="container mx-auto">
      <div className="h-screen text-white grid grid-cols-3 gap-4">
        <div className="quote-container p-8 sm:p-24 col-span-full sm:col-span-2 flex items-start">
          <div>
            <p className="text-gray-100 sm:text-lg">"{quote?.content}"</p>
            <p className="pt-3 sm:text-lg">{quote?.author}</p>
          </div>
          <button className="pl-3" onClick={getRandomQuote}>⟳</button>
        </div>

        <div className="col-span-full self-end flex flex-col sm:flex-row sm:justify-between	sm:items-end p-8 sm:p-24">
          <div className="location-info pb-5">
            <p className="uppercase font-light text-gray-100">good morning, it's currently</p>
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

        <TimeDetails showTimeDetails={showTimeDetails} today={today} />
      </div>
    </div >
  );
}

export default App;
