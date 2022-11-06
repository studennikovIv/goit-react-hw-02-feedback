import React from 'react'
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <>
    <ul className={css.btnList}>
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
      </ul>
    </>
  )
}

FeedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions
