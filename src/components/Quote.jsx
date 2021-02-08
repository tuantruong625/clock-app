import React from 'react'
import axios from 'axios'

const Quote = () => {
 const [loading, setLoading] = React.useState('')
 const [quote, setQuote] = React.useState(null)

 const getRandomQuote = React.useCallback(async () => {
  setLoading('Loading...')
  try {
    const response = await axios.get('https://api.quotable.io/random')
    setQuote(response.data)
    setLoading('')
  } catch (e) {
    console.log(e.message)
  }
 }, [])

 React.useEffect(() => {
   getRandomQuote();
 }, [getRandomQuote])
 
 return (
  <div className="quote-container p-8 sm:p-24 col-span-full sm:col-span-2 flex items-start">
    <div>
      {
        quote ? (
          <>
            <p className="text-gray-100 sm:text-lg">"{quote?.content}"</p>
            <p className="pt-3 sm:text-lg">{quote?.author}</p>
          </>
        ) : <p className="text-gray-100 sm:text-lg">{loading}</p>
      }
    </div>
    <button className="pl-3" onClick={getRandomQuote}>⟳</button>
  </div>
 )
}

export default Quote