import React from 'react'
import PropTypes from 'prop-types'

const feedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <>
      {option.map((el) => (
        <li key={el}>
          <button
            style={{ textTransform: 'capitalize' }}
            onClick={onLeaveFeedback}
          >
            {el.toString()}
          </button>
        </li>
      ))}
    </>
  )
}

feedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default feedbackOptions
