import React from 'react'
import { Route, Link } from 'react-router-dom'
import TastingUpdate from '../../views/TastingUpdate.js'

const Tasting = props => {
  const tastingFlavors = props.data.flavors.map((flavor) => flavor.name).join(', ')
  const dateCreated = new Date(props.data.created_at)
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          { props.data.tea.name }
        </div>
        <div className="col">
          { props.data.id }
        </div>
        <div className="col">
          { dateCreated.toDateString() }
        </div>
        <div className="col">
          {tastingFlavors}
        </div>
        {/* <div className="col">
          <img src={props.data.tea.picture}></img>
        </div> */}
      </div>
    </div>
  )
}

export default Tasting