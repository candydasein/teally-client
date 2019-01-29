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
      teas: [],
      user: this.props.user
    }
  }

  componentDidMount () {
    axios.get(apiUrl + '/teas')
      .then(res => {
        this.setState({teas: res.data.teas }) 
      })
    // axios.get(apiUrl + '/users')
    //   .then(res => {
    //     this.setState({users: res.data.users }) 
    //   })
  }

  //you must have a render function that returns something 

  render () {
    console.log('this.state.teas in GetRec is', this.state.teas)
   
    return (
      <div>
        <Recommendation 
          user= { this.state.user }
          teas= { this.state.teas } 
        />
      </div>
    )
  //}


  // return (
  //   <div>
  //     {Recommendations}
  //   </div>
  // )
  }
}

export default GetRecommendations