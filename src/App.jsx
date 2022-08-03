import { useEffect, useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Dropdown from './components/Dropdown'
import RadioSelect from './components/RadioSelect'
import RangeSlider from './components/RangeSlider'
import SearchBar from './components/SearchBar'
import Grid from './components/Grid'

import store from "./data/store.json"

function App() {

  const [filterQuery, setFilterQuery] = useState("")

  const [imageData, setImageData] = useState(store.results)
  
  useEffect(() => {
    setImageData(store.results)
  },[])

  const handleSearchFilter = (e) => {
    setFilterQuery(e)
    const temp = store.results.filter(foo => {
      return foo?.description?.includes(e) || foo?.category?.includes(e) || foo?.title?.includes(e) || foo?.gender?.includes(e)
    })
    setImageData(temp)
  }

  const handleCategoryFilter = (e) => {
    const temp = store.results.filter(foo => {
      return foo?.category?.includes(e)
    })
    setImageData(temp)
  }

  const handleTrendingFilter = (e) => {
    if(e === "all") {
      setImageData(store.results)
    } else {
      const temp = store.results.filter(foo => {
        return foo?.gender?.includes(e)
      })
      setImageData(temp)
    }
  }

  const handlePriceFilter = (price) => {
    const temp = store.results.filter(foo => {
      return parseInt(foo.price) < parseInt(price)
    })
    setImageData(temp)
  }

  return (
    <div className="App">
      <SearchBar 
        filterQuery={filterQuery} 
        handleSearchFilter={handleSearchFilter} 
      />
      <div className='conatiner'>
      <div className="utils">
        <div className="wrapper">
          <h5>SELECT CATEGORY</h5>
          <Dropdown 
            filterQuery={filterQuery} 
            handleCategoryFilter={handleCategoryFilter} 
          />
        </div>
        <div className="wrapper">
          <h5>TRENDING</h5>
          <RadioSelect 
            handleTrendingFilter={handleTrendingFilter} 
          />
        </div>
        <div className="wrapper">
          <h5>SET PRICE</h5>
          <RangeSlider 
            handlePriceFilter={handlePriceFilter}
          />
        </div>
      </div>
      {
        imageData.length > 0 
        ? <Grid data={imageData} /> 
        : "No data found"
      }
      </div>


    </div>
  )
}

export default App
