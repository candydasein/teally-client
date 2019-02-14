import React from 'react'

const TeaDropdown = props => {
  return (
    <option>{ props.name } ({ props.first_parent})</option>
  )
}

export default TeaDropdown