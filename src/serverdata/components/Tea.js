import React from 'react'

const Tea = props => {
  return (
    <div>
      <h3>Name: { props.data.name }</h3>
      <h4>Type: { props.data.family }</h4>
      <h4>Country: { props.data.country }</h4>
    </div>
  )
}

export default Tea