
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRamdonNumber from './utils/getRamdonNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputValue, setInputValue] = useState(getRamdonNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${inputValue || "hola"}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()
 
  const handleSumit = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    <>
      <img src="img.jpg" alt="Rick and Morty" />
      <div className='All'>
      <form className="busqueda" onSubmit={handleSumit}>
        <input className="buscar" ref={inputSearch} type='text' />
        <button className='click'>Search</button>
      </form>
      {
        hasError
        ? <h1 className='xd'>❌ Hey! you must provide in id from 1 to 126 😢</h1>
        : (
          <>
            <LocationInfo 
              location={location}
            /> 
            <div className='Cards'>
              {
                location?.residents.map(url => (
                  <ResidentCard 
                  key={url}
                  url = {url}
                  />
                ))
              }
            </div>
          </>
        )
      }
    </div>
    </>

  )
}

export default App
