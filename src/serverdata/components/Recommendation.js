import React, { Component } from 'react'
import TeaRecommendation from './TeaRecommendation.js'

class Recommendation extends Component {
  constructor(props) {
    
    super(props)
    console.log('this.props is', this.props)
    this.state = {
      teas: this.props.teas
    }
  }

  render() {
    const teaTop5Flavors = this.state.teas.map(tea => ({ name: tea.name, family: tea.family, country: tea.country, info: tea.info, picture: tea.picture, favorite_flavors: tea.favorite_flavors.slice(0, 5)
    }))

    const userTop5Flavors = this.props.user.favorite_flavors.slice(0, 5)

    const recommendedTeas = []

    teaTop5Flavors.forEach(tea => {
      if ((tea.favorite_flavors.filter
      ((flavor)=>{return userTop5Flavors.includes(flavor)}).length / tea.favorite_flavors.length * 100) >= 80) {
        recommendedTeas.push(tea)
      }
    })
    
    const recommendations = [] 
    
    for (let i = 0; i < 5; i++) {
      recommendations.push(recommendedTeas[i])
    }
    

    console.log('recommendedTeas is', recommendedTeas)
    
    return(
      <div className="recommendation-wrapper">
        <div className="recommendation-user-container">
          <div className="recommendation-message-1">
            Based on past tastings, your top five favorite flavors are: {''}
          </div>
          <div className="recommendation-user-favorites">
            <ol className="user-flavor-list"> 
              <li>{ this.props.user.favorite_flavors[0]}</li>
              <li>{ this.props.user.favorite_flavors[1]}</li>
              <li>{ this.props.user.favorite_flavors[2]}</li>
              <li>{ this.props.user.favorite_flavors[3]}</li>
              <li>{ this.props.user.favorite_flavors[4]}</li>  
            </ol>
            {/* { this.props.user.favorite_flavors[0]}, {''}
            { this.props.user.favorite_flavors[1]}, {''}
            { this.props.user.favorite_flavors[2]}, {''}
            { this.props.user.favorite_flavors[3]}, {''}
            and { this.props.user.favorite_flavors[4]}. */}
          </div>
          
          
        </div>
        {/* <div className="recommended-teas-container"> */}
        
        <div className="recommendation-message-2">
          Here are some teas we think you would like: 
        </div>

        <div className="recommended-tea-card">
          <img className="recommended-tea-image" alt="tea pic" src={recommendations[0].picture} />
          <div className="recommended-tea-info">
            <h3 className='sitter-name-h3'>{recommendations[0].name}</h3>
            <p>Family: {recommendations[0].family} Tea </p>
            <p>Country: {recommendations[0].country}</p>
            <p>Other users say it has these flavors: {recommendations[0].favorite_flavors.slice(0, 5).join(', ')}</p>
            <p>For more information, click <a href="{recommendations[0].info}">here</a></p>
          </div>
        
          {/* 


          <div className="recommended-tea-card" id="recommended-tea-card-1">
            <div className="recommended-tea-image">
              <img src='{recommendations[0].picture}'></img>
            </div>
            <div>{recommendations[0].name}, a {recommendations[0].family} tea from {recommendations[0].country}</div>
            <div>
              Click <span><a href='{recommendations[0].info}'>here</a></span> for more information.
            </div>
          </div>
          <div className="recommended-tea-card" id="recommended-tea-card-2">
            <div className="recommended-tea-image">
              <img src='{recommendations[1].picture}'></img>
            </div>
            <div>{recommendations[1].name}, a {recommendations[1].family} tea from {recommendations[1].country}</div>
            <div>
              Click <span><a href='{recommendations[1].info}'>here</a></span> for more information.
            </div>
          </div>
          <div className="recommended-tea-card" id="recommended-tea-card-3">
            <div className="recommended-tea-image">
              <img src='{recommendations[0].picture}'></img>
            </div>
            <div>{recommendations[2].name}, a {recommendations[2].family} tea from {recommendations[2].country}</div>
            <div>
              Click <span><a href='{recommendations[2].info}'>here</a></span> for more information.
            </div>
          </div>
          <div className="recommended-tea-card" id="recommended-tea-card-4">
            <div className="recommended-tea-image">
              <img src='{recommendations[3].picture}'></img>
            </div>
            <div>{recommendations[3].name}, a {recommendations[3].family} tea from {recommendations[3].country}</div>
            <div>
              Click <span><a href='{recommendations[3].info}'>here</a></span> for more information.
            </div>
          </div>
          <div className="recommended-tea-card" id="recommended-tea-card-5">
            <div className="recommended-tea-image">
              <img src='{recommendations[4].picture}'></img>
            </div>
            <div>{recommendations[4].name}, a {recommendations[4].family} tea from {recommendations[4].country}</div>
            <div>
              Click <a href='{recommendations[4].info}'>here</a> for more information.
            </div>
          </div> */}
        </div> 
        {/* </div> */}
      </div>
    )
  }
}

export default Recommendation