import React from 'react'
import PropTypes from 'prop-types'

const section = ({ titele }) => {
  return (
    <>
      <h2>{titele}</h2>
    </>
  )
}

section.propTypes = {
  titele: PropTypes.string.isRequired,
}

export default section
