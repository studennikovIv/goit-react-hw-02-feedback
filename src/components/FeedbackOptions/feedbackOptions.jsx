import React from 'react'
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
    <ul className={css.btnList}>
      {options.map((el) => (
        <li key={el}>
          <button
            style={{ textTransform: 'capitalize' }}
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        </li>
      ))}
      </ul>
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions
