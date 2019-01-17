import React from 'react'
import { Route, Link } from 'react-router-dom'
import TastingUpdate from '../../views/TastingUpdate.js'

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
        <Link to='/update-tasting/'>Update Tasting</Link>
        <Route user={user} exact path='/update-tasting/' render={() => (
          <TastingUpdate user={user} tea_id={props.data.tea.id} tea={props.data.tea.name} flavors={this.state.flavors}
          />
        )} />
      </dl>
    </div>
  )
}

export default Tasting