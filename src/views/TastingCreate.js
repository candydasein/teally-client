// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Animated from 'react-select/lib/animated'
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
      flavors: [], 
      message: null
    }
  }

  createTasting = (props) => {
    // get request to create a single movie using axios
    // axios.get(`http://localhost:4741/movies/${this.state.movieIndex}`)
    // .then(response => this.setState({movieData: response.data.movie}))
    // .catch(console.error)
    axios.post('http://localhost:4741/tastings/', {
      tasting: {
        user_id: this.props.user.id,
        tea_id: this.state.tea,
        // user_id: this.,
        // tea_id: 1,
        flavors: this.state.flavors
      }
    })
      .then(response => this.setState({ message: `made a new tasting with ID: ${response.data.tasting.id}` }))
      .catch(console.error)
  }

  onTeaChange = event => {
    this.setState({ tea: event.target.value })
  }
  //here event.target.value needs to come from dropdown
  onFlavorsChange = event => {
    this.setState({ flavors: event.target.value })
  }
  
  
  
  render() {
    console.log(this.props)
    const TeasInDropdown = this.props.teas.map((data, index) => {
      return (
        <TeaDropdown key={ index }
          name={ data.name } />
      )
    })

    const FlavorsInDropdown = this.props.flavors.map((data, index) => {
      return (
        <FlavorDropdown key={ index }
          name={ data.name } />
      )
    })

    return (
      <div className="dropdown">
        {/* <label htmlFor="sel1"></label> */}
        <form onSubmit={ this.createTasting }>
          <select required
            name="tea"
            onChange={ this.onTeaChange }>
            {TeasInDropdown}
          </select> 
          <select required
            name="flavors"
            onChange={this.onFlavorsChange}>
            {FlavorsInDropdown}
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