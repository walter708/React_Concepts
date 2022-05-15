import {useState , useEffect} from 'react'

// if the data isn't available yet but is loading 
// if we get the data 
// if there's an error
export const useFetch = (uri) => {
  const [data , setData] = useState()
  const [loading , setLoading] = useState(true)
  const [error, setError] = useState()
  
  useEffect(() => {
    if(!uri) return 
    
      fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(()=> setLoading(false))
      .catch(setError)
    
  },[uri])
  return {data , loading , error};
} 