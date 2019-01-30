import React, { Component } from 'react'
import axios from 'axios'
import Tea from '../serverdata/components/Tea.js'
import apiUrl from '../apiConfig.js'
//extend Component class
//once its's made it stores data in a property called .state
//makes React listen to every component that has state to see if 
//it needs to update the actual DOM 

class TeaIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teas: [],
      tastings: []
    }
  }

  componentDidMount () {
    axios.get(apiUrl + '/teas')
      .then(res => {
        this.setState({teas: res.data.teas }) 
      })
    axios.get(apiUrl + '/tastings')
      .then(res => {
        this.setState({tastings: res.data.tastings }) 
      })
  }

  //you must have a render function that returns something 

  render () {
    const Teas = this.state.teas.map((tea, index) => {
      return (
        <Tea key={ index }
          tea={ tea }
          // tastings= {this.state.tastings}
        />
      )
    })

    return (
      <div>
        {Teas}
      </div>
    )
  }
}

export default TeaIndex