import React from 'react'

const FlavorDropdown = props => {
  console.log('props in FlavorDropdown =', props)
  return (
    <option>{ props.name }</option>
  )
}

export default FlavorDropdown