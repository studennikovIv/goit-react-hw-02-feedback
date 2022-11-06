import React from 'react'
import PropTypes from 'prop-types'
import css from './statistics.module.css'
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
}

export default Statistics
