import React, { Component } from 'react'
import axios from 'axios'
import Tasting from '../serverdata/components/Tasting.js'
import apiUrl from '../apiConfig.js'

//extend Component class
//once its's made it stores data in a property called .state
//makes React listen to every component that has state to see if 
//it needs to update the actual DOM 

class TastingsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tastings: []
    }
  }

  componentDidMount () {
    axios.get(apiUrl + '/tastings')
      .then(res => {
        this.setState({tastings: res.data.tastings }) 
      })
  }

  //you must have a render function that returns something 
  
  render () {
    const UserTastings = this.state.tastings
      .filter(tasting => tasting.user.id === this.props.user.id) 
      .map((data, index) => {
        return (
          <Tasting key={ index }
            data={ data } 
            user={this.props.user}/>
        )
      })

    return (
      <div>
        {UserTastings}
      </div>
    )
  }
}

export default TastingsIndex