import React from 'react'
import { Route, Link } from 'react-router-dom'
import TastingUpdate from '../../views/TastingUpdate.js'

const Tasting = props => {
  const tastingFlavors = props.data.flavors.map((flavor) => flavor.name).join(', ')
  const dateCreated = new Date(props.data.created_at)
  
  return (
    <div className="media">
      <div className="media-body">
        <h5 className="mt-0">
          { props.data.tea.name }
        </h5>
          Tasting #{ props.data.id }
        <br></br>
        
         Tasted on { dateCreated.toDateString() }
        <br></br>
        You liked these flavors: {tastingFlavors}
      </div>
    </div>
  )
}

export default Tasting