import React, { Component } from 'react'
import axios from 'axios'
import Tasting from '../serverdata/components/Tasting.js'
import apiUrl from '../apiConfig.js'

//extend Component class
//once its's made it stores data in a property called .state
//makes React listen to every component that has state to see if 
//it needs to update the actual DOM 

class TastingShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      tastingData: null
    }
  }

  getTasting = () => {
    const { id }= this.state.id
    axios.get(apiUrl + `/tastings/${id}`)
      .then(res => {
        this.setState({tastingData: res.data.tasting }) 
      })
  }

  onIdChange = event => {
    this.setState({ id: event.target.value })
  }
  //you must have a render function that returns something 
  
  render () {
    return (
      <div>
        <form onSubmit={ this.getTasting }>
          <input type="number"
            placeholder="Tasting ID"
            value={ this.state.id }
            onChange={ this.onIdChange } />
          <input type="submit" value="Get Tasting" /> 
        </form>
        { this.state.tastingData ? <Tasting data={this.state.tastingData} /> : <p>No tasting loaded</p> }
      </div>
    )
  }
}

export default TastingShow