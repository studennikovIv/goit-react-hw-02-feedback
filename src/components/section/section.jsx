import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ titele,children }) => {
  return (
    <>
      <h2>{titele}</h2>
      {children}
    </>
  )
}

Section.propTypes = {
  titele: PropTypes.string,
  children: PropTypes.element
  
}

export default Section
