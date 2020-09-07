import React from 'react'
import DetailsDate from './DetailsDate'
import PropTypes from 'prop-types'

function WeatherBox (props) {
  const dataDateWise = props.allWeatherData.reduce((data, item) => {
    const date = item.dt_txt.split(' ')[0]
    if (!data[date]) {
      data[date] = []
    }
    data[date].push(item)
    return data
  }, {})
  const allDates = Object.keys(dataDateWise)

  return (
    <div className="weather-box">
      { allDates.map((date, index) => {
        return (
          <div key={index}>
            <div className='date-title'>{date}</div>
            <DetailsDate dateWiseData ={dataDateWise[date]} date={date} />
          </div>
        )
      })}
    </div>
  )
}
WeatherBox.propTypes = {
  allWeatherData: PropTypes.array.isRequired
}
export default WeatherBox
