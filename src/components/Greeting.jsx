import moment from 'moment'

const Greeting = ({ date }) => {
 const currentHour = moment(date.getHours()).format('HH');
 let message;

 if (currentHour >= 3 && currentHour < 12) {
   message = 'Good Morning';
 } else if (currentHour >= 12 && currentHour < 15) {
   message = 'Good Afternoon';
 } else if (currentHour >= 15 && currentHour < 20) {
   message = 'Good Evening';
 } else if (currentHour >= 20 && currentHour < 3) {
   message = 'Good Night';
 } else {
   message = 'Hello'
 }

 return (
   <p className="uppercase font-light text-gray-100">{message}, its currently</p>
 )
}

export default Greeting;