import React, { Component } from 'react'
import axios from 'axios'
import Recommendation from '../serverdata/components/Recommendation'
import apiUrl from '../apiConfig.js'
//extend Component class
//once its's made it stores data in a property called .state
//makes React listen to every component that has state to see if 
//it needs to update the actual DOM 

class GetRecommendations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // teas: this.props.tea,
      user: this.props.user
    }
  }

  // componentDidMount () {
  // axios.get(apiUrl + `/users/${this.props.user.id}`)
  //   .then(res => {
  //     console.log(res.data)
  //     this.setState({user: res.data.user }) 
  //   })
  // }

  //you must have a render function that returns something 

  render () {
    return (
      <div>
        <Recommendation 
          user= { this.state.user }
          // teas= { this.state.teas } 
        />
      </div>
    )
  //}
  }
}

export default GetRecommendations