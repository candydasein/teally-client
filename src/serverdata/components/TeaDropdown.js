import React from 'react'

const TeaDropdown = props => {
  console.log('props in TeaDropdown =', props)
  return (
    <option>{ props.name }</option>
  )
}

export default TeaDropdown