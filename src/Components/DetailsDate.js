import React from 'react'
import DetailsCard from './DetailsCard'
import PropTypes from 'prop-types'

function DetailsDate (props) {
  return (
    <div>
      {
        props.dateWiseData.map((data) => {
          const { dt_txt } = data
          const date = dt_txt.split(' ')[1]
          return (
            <div key= {date} className='date-details-box'>
              <label> {date} </label>
              <DetailsCard index={dt_txt} weatherData={data} />
            </div>
          )
        })}
    </div>
  )
}
DetailsDate.propTypes = {
  dateWiseData: PropTypes.array.isRequired
}
export default DetailsDate
