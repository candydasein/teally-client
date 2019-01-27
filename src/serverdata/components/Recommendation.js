import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import TeaTop5 from './Tea.js'

class Recommendation extends Component {
  constructor(props) {
    //console.log(props)
    super(props)
    this.state = {
      teas: []
    }
  }

  componentDidMount () {
    axios.get(apiUrl + '/teas')
      .then(res => {
        this.setState({teas: res.data.teas }) 
      })
  }

 

    makeRecommendation = (props) => {
      const userFlavors = this.props.user.flavors.map(flavor => flavor.name)
      const userFlavorFrequency = {}
  
      for (let i = 0; i < userFlavors.length; i++) {
        const num = userFlavors[i]
        userFlavorFrequency[num] = userFlavorFrequency[num] ? userFlavorFrequency[num] + 1 : 1
      }
  
      const userSortableFlavors = []
      for (const flavor in userFlavorFrequency) {
        userSortableFlavors.push([flavor, userFlavorFrequency[flavor]])
      }
  
      const userSortedFavoriteFlavors = userSortableFlavors.sort((a, b) => b[1] - a[1]).slice(0, 5)
      
      const userTop5 = userSortedFavoriteFlavors.flat()
        .filter(item => typeof item === 'string')
        .join(', ') 
  
      // const teaFlavors = this.state.teas.map(tea => tea.flavors)
      // console.log(teaFlavors)
      // const teaFlavorFrequency = {}
  
      // for (let i = 0; i < teaFlavors.length; i++) {
      //   const num = teaFlavors[i]
      //   teaFlavorFrequency[num] = teaFlavorFrequency[num] ? teaFlavorFrequency[num] + 1 : 1
      // }
  
      // const teaSortableFlavors = []
      // for (const flavor in teaFlavorFrequency) {
      //   teaSortableFlavors.push([flavor, teaFlavorFrequency[flavor]])
      // }
  
      // const teaSortedFavoriteFlavors = teaSortableFlavors.sort((a, b) => b[1] - a[1]).slice(0, 5)
      
      // const teaTop5 = teaSortedFavoriteFlavors.flat()
      //   .filter(item => typeof item === 'string')
      //   .join(', ') 
  
      // console.log('user\'s top 5 are', userTop5)
      // console.log('tea\'s top 5 are', teaTop5)
      
      //must be this user
      //must create HTML frame: recommended teas are based on your five favorite flavors
      //must call for teas 
      //must display this user's favorite flavors and tea's favored flavors side by side
      //how to calculate a match? if user's top 5 and tea's top five share any matches. 
      //the more matches, the higher the recommendation
      //simple way: there will be only 6 match levels: 0%, 20%, 40%, 60%, 80%, 100%
      //method: compare this user's userTop5 with every single tea's teaTop5
      //one way: could create a Match component and pass down userTop5 and teaTop5 as props?
      //could be triggered by button also tied to makeRecommendation
  
    }

    render() {
      this.makeRecommendation() 
      return(
        <div className="container">
          <div className="row">
            <div className="col">
              { this.props.user.email }
            </div>
            <div className="col">
              Your favorite flavors are { this.userTop5 }
            </div>
            {/* <div className="col">
              { props.tea.country}
            </div>
            <div className="col">
              <span style={{fontWeight: '700'}}>Top 5 favorite flavors:</span> { top5 }
            </div>
            <div className="col">
              <img className="tea-picture" src={props.tea.picture}></img>
            </div> */}
          </div>
        </div>
      )
    }
}

export default Recommendation