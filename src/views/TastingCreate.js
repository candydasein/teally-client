// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'


//the name of the component should match the name
// of the file
// make sure to extend the Component class
class TastingCreate extends Component {

  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      tea: 0,
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
        flavors:[2, 3, 4]
      }
    })
      .then(response => this.setState({ message: `made a new tasting with ID: ${response.data.tasting.id}` }))
      .catch(console.error)
  }

  onTeaChange = event => {
    this.setState({ tea: event.target.value })
  }

  onFlavorsChange = event => {
    this.setState({ flavors: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.createTasting }>
          <input type="number"
            placeholder="Tea"
            value={ this.state.tea }
            onChange={ this.onTeaChange } />
          <input type="number"
            placeholder="Flavors"
            value={ this.state.flavors }
            onChange={ this.onFlavorsChange } />
          <input type="submit"
            value="Create Tasting!" />
        </form>
        {this.state.message && <span>{ this.state.message} </span> }
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default TastingCreate