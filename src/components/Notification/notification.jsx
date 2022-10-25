import React from 'react'
import PropTypes from 'prop-types'

const notification = ({ message }) => {
  return (
    <>
      <p>{message}</p>
    </>
  )
}
notification.propTypes = {
  message: PropTypes.string.isRequired,
}
export default notification
