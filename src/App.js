import backgroundImage from '../src/assets/pexels-lumn-167684.jpg'

function App() {
  return (
    <div className="container mx-auto" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="h-screen p-8 sm:p-24 text-white grid grid grid-cols-3 gap-4">
        <div className="quote-container col-span-full sm:col-span-2 flex items-start">
          <div>
            <p className="text-gray-100">"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for."</p>
            <p className="pt-3">Bob Marley</p>
          </div>
          <button className="pl-3">⟳</button>
        </div>

        <div className="col-span-full self-end flex flex-col sm:flex-row sm:justify-between	sm:items-end">
          <div className="location-info pb-5">
            <p className="uppercase font-light text-gray-100">good morning, it's currently</p>
            <p className="py-5 font-bold text-8xl uppercase">
              11:11
              <span className="text-base font-light text-gray-400">est</span>
            </p>
            <p className="uppercase">in kitchener, ontario</p>
          </div>

          <div className="details-button pt-10">
            <button className="bg-white text-gray-500 h-10 w-28  rounded-full flex items-center justify-between px-1">
              <span className="uppercase tracking-wide pl-2">More</span>
              <span className="bg-gray-800 rounded-full h-8 w-8 text-gray-100 flex items-center justify-center">⇩</span>
            </button>
          </div>
        </div>

      </div>
    </div >
  );
}

export default App;
