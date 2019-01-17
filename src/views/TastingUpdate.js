// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig.js'

//the name of the component should match the name
// of the file
// make sure to extend the Component className
class TastingUpdate extends Component {

  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      tea: this.props.tea,
      tea_id: this.props.tea_id,
      flavors: [],
      flavor_ids: [],
      message: null
    }
  }

  updateTasting = (props) => {
    event.preventDefault()
    // const { tea_id }= this.state

    axios.patch(apiUrl + `/tastings/${ parseInt(this.props.tea_id) }`, {
      tasting: {
        user_id: Number(this.props.user.id),
        tea_id: Number(this.state.tea_id),
        flavors: this.state.flavor_ids,
      }
    })
      .then(response => this.setState({ message: `You have updated tasting #${response.data.tasting.id}` }))
      .catch(console.error)
  }

  // onTeaChange = event => {
  //   console.log('event.selectedOptions[0].getAttribute is', event.target.selectedOptions[0].getAttribute('data-key'))
  //   this.setState({ tea: event.target.value, tea_id: event.target.selectedOptions[0].getAttribute('data-key')  } )
  // } 
  //here event.target.value needs to come from dropdown
  onFlavorsChange = event => {
    const { options } = event.target
    const flavor_ids = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value)
    if(flavor_ids.length > 5 ) return         
    this.setState({ flavor_ids })
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.updateTasting }>
          <select>
            {this.props.tea}
          </select> 
          <select multiple value={this.state.flavor_ids} 
            onChange={this.onFlavorsChange}>
            {this.props.flavors.map((flavor) => {
              return (
                <option key={flavor.id} value={flavor.id}>{ flavor.name }</option>
              )})}
          </select>
          <input type="submit" value="Update Tasting" /> 
        </form>
        {this.state.message && <span>{ this.state.message} </span> }
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default TastingUpdate