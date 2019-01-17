import React from 'react'

const Tasting = props => {
  console.log(props.data.created_at)
  const tastingFlavors = props.data.flavors.map((flavor) => flavor.name).join(', ')
  const dateCreated = new Date(props.data.created_at)
  
  return (
    <div>
      <dl className="row">
        <dt className="col-sm-3">Tea: { props.data.tea.name }</dt>
        <dd className="col-sm-3">Tasting ID: { props.data.id }. </dd>
        <dd className="col-sm-3">Tasted on { dateCreated.toDateString() }. </dd>
        <dd className="col-sm-9">Flavors: {tastingFlavors}</dd> 
      </dl>
    </div>
  )
}

export default Tasting