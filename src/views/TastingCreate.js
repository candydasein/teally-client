// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'
import TeaDropdown from '../serverdata/components/TeaDropdown.js'
import FlavorDropdown from '../serverdata/components/FlavorDropdown.js'

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
      flavor_id: null,
      message: null
    }
  }

  createTasting = (props) => {
    console.log(this.props.teas)
    event.preventDefault()
    // get request to create a single movie using axios
    // axios.get(`http://localhost:4741/movies/${this.state.movieIndex}`)
    // .then(response => this.setState({movieData: response.data.movie}))
    // .catch(console.error)
    axios.post('http://localhost:4741/tastings/', {
      tasting: {
        user_id: Number(this.props.user.id),
        tea_id: Number(this.state.tea_id),
        // user_id: this.,
        // tea_id: 1,
        flavors: [Number(this.state.flavor_id)],
      }
    })
      .then(response => this.setState({ message: `made a new tasting with ID: ${response.data.tasting.id}` }))
      .catch(console.error)
  }

  onTeaChange = event => {
    console.log('event.selectedOptions[0].getAttribute is', event.target.selectedOptions[0].getAttribute('data-key'))
    this.setState({ tea: event.target.value, tea_id: event.target.selectedOptions[0].getAttribute('data-key')  } )
  } 
  //here event.target.value needs to come from dropdown
  onFlavorsChange = event => {
    console.log('event.selectedOptions[0].getAttribute is', event.target.selectedOptions[0].getAttribute('data-key'))
    this.setState({ flavor: event.target.value, flavor_id: event.target.selectedOptions[0].getAttribute('data-key')  } )
  }

  render () {
    return (
      <div className="dropdown">
        <form onSubmit={ this.createTasting }>
          <select required
            // key={ this.props.tea.id }
            //value={ this.state.tea.id }
            onChange={ this.onTeaChange }>
            {this.props.teas.map((tea) => {
              return (
                <option key={tea.id} data-key={tea.id}>{ tea.name }</option>
              )})}
          </select> 
        
          {/* <TeaDropdown key={ index }
          name={ data.name } />
           */}
        
          
          <select
            // key={this.state.flavor[id]}
            //value={ this.state.flavors }
            onChange={this.onFlavorsChange}>
            {this.props.flavors.map((flavor) => {
              return (
                <option key={flavor.id} data-key={flavor.id}>{ flavor.name }</option>
              )})}
          </select>
          <input type="submit" value="Create Tasting" /> 
        </form>
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default TastingCreate