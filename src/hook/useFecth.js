import axios from "axios"
import { useState } from "react"

const useFecth = (url) => {

  const [response, setResponse] = useState()
  
  const getApi = () => {
    axios.get(url)
    .then(res => setResponse(res.data))
    .catch(err => console.log(err))
  }

  return [ response, getApi ]
}

export default useFecth