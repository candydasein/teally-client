import React from 'react'

const TeaDropdown = props => {
  console.log('props in TeaDropdown =', props)
  return (
    <select className="form-control" id="sel1">
      <option>{ props.name }</option>
    </select>
  )
}

export default TeaDropdown