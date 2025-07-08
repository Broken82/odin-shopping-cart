import { useEffect } from 'react'
import fetchData from './utils/fetchData'

function App() {

  useEffect(() =>{
    const fetch = async () =>{
      try{
        const data = await fetchData()
        console.log(data)
      } catch(err){
        console.log(err)
      }
    }
    fetch()
  },[])

  return (
    <>

    </>
  )
}

export default App
