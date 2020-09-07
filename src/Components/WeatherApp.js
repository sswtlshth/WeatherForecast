import React, { useState, useEffect } from 'react'
import WeatherBox from './WeatherBox'
import apikeys from '../apikeys'

function WeatherApp () {
  const [cityName] = useState('London,uk')
  const [cityWeatherData, setCityWeatherData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${apikeys.apikey}`,
            {
              method: 'GET'
            })
      .then(res => res.json())
      .then(response => {
        console.log('SWE response ', response)
        setCityWeatherData(response)
        setLoading(false)
      })
      .catch(err => console.error('Error in fetch data ', err))
  }, [])

  const { list } = cityWeatherData
  return (
    <div className='weather-app-main'>
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
      <h5 className="display-5 text-muted">{cityName}</h5>
      { isLoading ? <label> loading </label> : <WeatherBox allWeatherData = {list} /> }
    </div>
  )
}

export default WeatherApp
