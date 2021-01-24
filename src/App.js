import React from 'react';

function App() {
  const [showTimeDetails, setTimeDetails] = useToggle()

  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }

  const TimeDetails = () => {
    return (
      showTimeDetails ?
        <div className="details-container col-span-full bg-gray-100 sm:p-24 sm:py-0">
          <div className="p-8 pb-2 sm:px-0 grid grid-cols-1 sm:grid-cols-2">
            <p className="text-gray-400 uppercase flex justify-between text-xs py-3 tracking-wide sm:flex-col">
              current time zone
              <span className="text-gray-800 font-bold text-lg sm:text-4xl sm:pt-4">eastern</span>
            </p>
            <p className="text-gray-400 uppercase flex justify-between text-xs py-3 tracking-wide sm:flex-col">
              day of the year
              <span className="text-gray-800 font-bold text-lg sm:text-4xl sm:pt-4">295</span>
            </p>
            <p className="text-gray-400 uppercase flex justify-between text-xs py-3 tracking-wide sm:flex-col">
              day of the week
              <span className="text-gray-800 font-bold text-lg sm:text-4xl sm:pt-4">5</span>
            </p>
            <p className="text-gray-400 uppercase flex justify-between text-xs py-3 tracking-wide sm:flex-col">
              week number
              <span className="text-gray-800 font-bold text-lg sm:text-4xl sm:pt-4">42</span>
            </p>
          </div>
        </div>
        : null
    )
  }

  return (
    <div className="container mx-auto">
      <div className="h-screen text-white grid grid-cols-3 gap-4">
        <div className="quote-container p-8 sm:p-24 col-span-full sm:col-span-2 flex items-start">
          <div>
            <p className="text-gray-100">"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for."</p>
            <p className="pt-3">Bob Marley</p>
          </div>
          <button className="pl-3">⟳</button>
        </div>

        <div className="col-span-full self-end flex flex-col sm:flex-row sm:justify-between	sm:items-end p-8 sm:p-24">
          <div className="location-info pb-5">
            <p className="uppercase font-light text-gray-100">good morning, it's currently</p>
            <p className="py-5 font-bold text-8xl uppercase">
              11:11
              <span className="text-base font-light text-gray-400">est</span>
            </p>
            <p className="uppercase">in kitchener, ontario</p>
          </div>

          <div className="details-button pt-10">
            <button className="bg-white text-gray-500 h-10 w-28  rounded-full flex items-center justify-between px-1" onClick={setTimeDetails}>
              <span className="uppercase tracking-wide pl-2">{showTimeDetails ? 'Less' : 'More'}</span>
              <span className="bg-gray-800 rounded-full h-8 w-8 text-gray-100 flex items-center justify-center">{showTimeDetails ? '⇧' : '⇩'}</span>
            </button>
          </div>
        </div>

        <TimeDetails />
      </div>
    </div >
  );
}

export default App;
