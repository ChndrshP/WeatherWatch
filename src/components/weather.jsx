import React from 'react'
import './weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/search.png'
import drizzle_icon from '../assets/search.png'
import humidity_icon from '../assets/search.png'
import rain_icon from '../assets/search.png'
import snow_icon from '../assets/search.png'
import wind_icon from '../assets/search.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <img src={search_icon} alt="search_logo" />
        </div>
    </div>
  )
}

export default Weather