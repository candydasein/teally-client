// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig.js'

//the name of the component should match the name
// of the file
// make sure to extend the Component class
class TastingDelete extends Component {

  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      message: null
    }
  }

  deleteTasting = () => {
    // get request to get a single movie using axios
    axios.delete(apiUrl + `/tastings/${this.state.id}`)
      .then(() => this.setState({message: `You deleted tasting ${this.state.id}`}))
      .catch(console.error)

  }

  onIdChange = event => {
    this.setState({ id: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.deleteTasting } >
          <input type="number"
            placeholder="Id of tasting to delete"
            value={ this.state.id }
            onChange={ this.onIdChange } />
          <input type="submit"
            value="Delete Tasting!" />
        </form>
        {this.state.message && <span>{this.state.message}</span>}
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default TastingDelete