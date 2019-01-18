// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig.js'
import Flavorwheel from '../images/Flavorwheel.jpg'

//the name of the component should match the name
// of the file
// make sure to extend the Component className
class TastingCreate extends Component {

  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      tea: '',
      tea_id: null,
      flavors: [],
      flavor_ids: [],
      message: null
    }
  }

  createTasting = (props) => {
    event.preventDefault()
    axios.post(apiUrl + '/tastings/', {
      tasting: {
        user_id: Number(this.props.user.id),
        tea_id: Number(this.state.tea_id),
        flavors: this.state.flavor_ids,
      }
    })
      .then(response => this.setState({ message: `made a new tasting with ID: ${response.data.tasting.id}` }))
      .catch(console.error)
  }

  onTeaChange = event => {
    this.setState({ tea: event.target.value, tea_id: event.target.selectedOptions[0].getAttribute('data-key')  } )
  } 
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
        <div className="tasting-instructions">
          <h3>Instructions:</h3>
          <h6>1. Choose the tea you are tasting from the dropdown menu. </h6>
          <h6>2. Before brewing the tea, take a nice, long inhale above the dry leaves,
            acknowledging any aromas or sensations you detect. </h6>
          <h6>3. Brew the tea using the appropriate temperature, time, and method.</h6>
          <h6>4. As you are sipping the tea, inhale through your nose, exhale, then swallow. As you do so
            note any flavors or aromas.</h6>
          <h6>5. Consult the flavor wheel below if you like, beginning from the general categories
            in the inner most rings, then moving outward until you find a flavor that matches what you detected.</h6>
          <h6>5. Choose up to 5 flavors using the Command key on your keyboard, then hit submit.</h6>  
        </div>
        <img className="flavorwheel" src={Flavorwheel}></img>
        <form onSubmit={ this.createTasting }>
          <select className="tea-select" required
            onChange={ this.onTeaChange }>
            {this.props.teas.map((tea) => {
              return (
                <option key={tea.id} data-key={tea.id}>{ tea.name }</option>
              )})}
          </select> 
          <select className="flavor-select" multiple value={this.state.flavor_ids} 
            onChange={this.onFlavorsChange}>
            {this.props.flavors.map((flavor) => {
              return (
                <option key={flavor.id} value={flavor.id}>{ flavor.name }</option>
              )})}
          </select>
          <input className="create-tasting-button" type="submit" value="Submit" /> 
        </form>
        {this.state.message && <span>{ this.state.message} </span> }
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default TastingCreate