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
        <div className="jumbotron">
          <h1 className="display-4">Instructions</h1>
          {/* <form onSubmit={ this.createTasting }>
            <select className="tea-select" required
              onChange={ this.onTeaChange }>
              {this.props.teas.map((tea) => {
                return (
                  <option key={tea.id} data-key={tea.id}>{ tea.name }</option>
                )})}
            </select>  */}
            
            
          <hr className="my-4"></hr>
          <p>1. Choose the tea you are tasting from the dropdown menu below. </p>
          <p>2. Before brewing the tea, take a nice, long inhale above the dry leaves,
            acknowledging any aromas or sensations you detect.</p>
          <p>3. Brew the tea using the appropriate temperature, time, and method.</p>
          <p>4. As you are sipping the tea, inhale through your nose, exhale, then swallow. As you do so
            note any flavors or aromas.</p>
          <p>5. Consult the flavor wheel, beginning from the general categories
            in the innermost rings, then moving outward until you find a specific flavor that matches what you detected.</p>
          <p>6. Choose up to 5 flavors from the menu below using the Command key on your keyboard, then hit submit.</p> 
        </div>  
        <div className="flavorwheel-container">
          <div className="span4">
            <img className="img-fluid" src={Flavorwheel}></img>
          </div>  
        </div>
           
        <div className="tasting-form-container">
          <div className="float-right">
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
                    <option key={flavor.id} value={flavor.id}>{ flavor.name }  ({flavor.first_parent})</option>
                  )})}
              </select>
              <input className="create-tasting-button" type="submit" value="Submit" /> 
            </form>
          </div>
          {this.state.message && <span>{ this.state.message} </span> }
        </div>
      </div> 
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default TastingCreate