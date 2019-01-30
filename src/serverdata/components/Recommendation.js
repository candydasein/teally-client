import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import Tea from './Tea.js'

class Recommendation extends Component {
  constructor(props) {
    
    super(props)
    console.log('this.props is', this.props)
    this.state = {
      teas: this.props.teas
    }
  }

  // componentDidMount () {
  //   axios.get(apiUrl + '/teas')
  //     .then(res => {
  //       this.setState({teas: res.data.teas }) 
  //     })
  // }

  

  render() {
    const teaTop5Flavors = this.state.teas.map(tea => ({ name: tea.name, favorite_flavors: tea.favorite_flavors.slice(0, 5)
    }))
    
    console.log('teaTop5Flavors is', teaTop5Flavors)

    const userTop5Flavors = this.props.user.favorite_flavors.slice(0, 5)

    console.log('userTop5Flavors is', userTop5Flavors )

    const recommendedTeas = []

    teaTop5Flavors.forEach(tea => {
      if ((tea.favorite_flavors.filter((flavor)=>{return userTop5Flavors.includes(flavor)}).length / tea.favorite_flavors.length * 100) >= 80) {
        recommendedTeas.push(tea)
      }
      
      // const percentageMatchHash = ({ name: tea.name, favorite_flavors: tea.favorite_flavors, matchPercentage: (matches / tea.favorite_flavors.length * 100) }) 
      // console.log('percentageMatchHash is', percentageMatchHash)
      // const matches = tea.favorite_flavors.filter((flavor)=>{return userTop5.includes(flavor)}).length
      // const percentageMatchHash = ({ name: tea.name, favorite_flavors: tea.favorite_flavors, matchPercentage: (matches / tea.favorite_flavors.length * 100) }) 
      // console.log('percentageMatchHash is', percentageMatchHash)
    })
    
    const recommendations = [] 
    
    for (let i = 0; i < 5; i++) {
      recommendations.push(recommendedTeas[i].name)
    }
    

    console.log('recommendedTeas is', recommendedTeas)
    
   
    //create object: name: tea.name, favorite_flavors: tea.favorite_flavors, percentageMatch: percentageMatch
    
  
    //iterate through object, get percentageMatch.name where percentageMatch.matchPercentage > 

    // console.log('matches is', matches)
    // console.log('percentageMatchHash is', percentageMatchHash)
    


    // const recommendedTeas = []
    // if (percentageMatchHash.matchPercentage > 60) {
    //   recommendedTeas.push(percentageMatchHash)
    // }
    // console.log('recommendedTeas is', recommendedTeas)
    
    //find percentage match, create array of tea objects
    //that include name, favorite_flavors, and percentageMatch;
    //order this array by percentageMatch
    
    
    
    // const text = ['Oak', 'Bamboo']
    
    
    // console.log('Top5Flavors[3].favorite_flavors is', Top5Flavors[3].favorite_flavors)

    // const matchPerc = (userTop5, text) =>{
    //   const matches = text.filter((flavor)=>{return userTop5.includes(flavor)}).length
    //   return (matches / text.length * 100).toFixed(2) + '%'
    // }

    // console.log(matchPerc)

    // const TeaRecommendations = this.state.teas.map((tea, index) => {
    //   return (
    //     <Tea key={ index }
    //       tea={ tea }
    //       // tastings= {this.state.tastings}
    //     />
    //   )
    // })
    // // }

   
    // this.makeRecommendation() 
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            { this.props.user.email }
          </div>
          <div className="col">
            Your favorite flavors are: { this.props.user.favorite_flavors.slice(0, 5).join(', ') }
          </div>
        </div>
        <div className="row">
          <div className="col">
            We think you would like: 
          </div>
          <div className="col">
            { recommendations.join(', ') }
          </div>
        </div>
        {/* <div className="row">
            We think you would like: { TeaRecommendations }
          </div> */}
        {/* <div className="col">
            {Teas}
          </div> */} 
        {/* <div className="col">
            { props.tea.country}
          </div>
          <div className="col">
            <span style={{fontWeight: '700'}}>Top 5 favorite flavors:</span> { top5 }
          </div>
          <div className="col">
            <img className="tea-picture" src={props.tea.picture}></img>
          </div> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Recommendation