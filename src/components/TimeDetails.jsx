import moment from 'moment'

function TimeDetails({ showTimeDetails, date }) {
  const weekOfYear = moment(date).week()
  const dayOfYear = moment(date).dayOfYear()
  const dayOfWeek = moment(date).day() + 1
  
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
           <span className="text-gray-800 font-bold text-lg sm:text-4xl sm:pt-4">{dayOfYear}</span>
         </p>
         <p className="text-gray-400 uppercase flex justify-between text-xs py-3 tracking-wide sm:flex-col">
           day of the week
           <span className="text-gray-800 font-bold text-lg sm:text-4xl sm:pt-4">{dayOfWeek}</span>
         </p>
         <p className="text-gray-400 uppercase flex justify-between text-xs py-3 tracking-wide sm:flex-col">
           week number
           <span className="text-gray-800 font-bold text-lg sm:text-4xl sm:pt-4">{ weekOfYear}</span>
         </p>
       </div>
     </div>
     : null
 )
}

export default TimeDetails