import React from 'react'

const Tea = props => {
  console.log(props)
  return (
    <div>
      <dl className="row">
        <dt className="col-sm-3">Name: { props.data.name }</dt>
        <dd className="col-sm-9">Type: { props.data.family }</dd>
        <dd className="col-sm-9">Country: { props.data.country }</dd>
      </dl>
    </div>
  )
}

export default Tea