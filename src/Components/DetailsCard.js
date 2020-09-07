import React from 'react'
import PropTypes from 'prop-types'

function DetailsCard (props) {
  const { main } = props.weatherData
  const { temp_min } = main
  return (
    <div>
      <div className="Weather-app">
        <label> min temparature </label>
        <label> { temp_min } </label>
      </div>
    </div>
  )
}
DetailsCard.propTypes = {
  weatherData: PropTypes.object.isRequired
}
export default DetailsCard
