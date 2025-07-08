import { useEffect, useState } from 'react'
import fetchData from './utils/fetchData'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import './styles/reset.css'
import './App.css'



function App() {

  const [items, setItems] = useState([])

  useEffect(() =>{
    const fetch = async () =>{
      try{
        const data = await fetchData()
        const changedData = data.map((item) => {
          return {
            ...item,
            quantity: 0

          }
        })

        setItems(changedData)
      


      } catch(err){
        console.log(err)
      }
    }
    fetch()
  },[])

  console.log(items)

  return (
    <>
      <Navbar />
      <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </>
  )
}

export default App
