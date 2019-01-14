import React, { Component } from 'react'
import axios from 'axios'
import Tea from '../serverdata/components/Tea.js'

//extend Component class
//once its's made it stores data in a property called .state
//makes React listen to every component that has state to see if 
//it needs to update the actual DOM 

class TeaIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teas: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:4741/teas')
      .then(res => {
        this.setState({teas: res.data.teas }) 
      })
  }

  //you must have a render function that returns something 

  render () {
    const Teas = this.state.teas.map((data, index) => {
      return (
        <Tea key={ index }
          data={ data } />
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