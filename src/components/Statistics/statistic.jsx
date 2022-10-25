import React from 'react'
import PropTypes from 'prop-types'
import css from './statistics.module.css'
const statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <h2 className={css.titeleStatistics}>Statistics</h2>
      <ul className={css.listStatistics}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positiveFeedback}%</li>
      </ul>
    </>
  )
}

statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
}

export default statistics
