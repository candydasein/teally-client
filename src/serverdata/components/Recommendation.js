import React, { Component } from 'react'
import TeaRecommendation from './TeaRecommendation.js'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'

class Recommendation extends Component {
  constructor(props) {
    
    super(props)
    console.log('this.props is', this.props)
    this.state = {
      teas: this.props.teas,
      user: this.props.user
    }
  }

  componentDidMount () {
    axios.get(apiUrl + `/users/${this.props.user.id}`)
      .then(res => {
        console.log('res.data.user is', res.data.user)
        this.setState({user: res.data.user }) 
      })
  }

  render() {
    const teaTop5Flavors = this.state.teas.map(tea => ({ name: tea.name, family: tea.family, country: tea.country, info: tea.info, picture: tea.picture, favorite_flavors: tea.favorite_flavors.slice(0, 5)
    }))

    console.log(this.state.user.favorite_flavors)
    
    const userTop5Flavors = this.state.user.favorite_flavors.slice(0, 5)

    const recommendedTeas = []

    teaTop5Flavors.forEach(tea => {
      if ((tea.favorite_flavors.filter
      ((flavor)=>{return userTop5Flavors.includes(flavor)}).length / tea.favorite_flavors.length * 100) >= 60) {
        recommendedTeas.push(tea)
      }
    })
    
    const Recommendations = recommendedTeas.map((recommendation, index) => {
      return (
        <div className="media" key={index}>
          <img className="media-image col-sm-2" src={recommendation.picture} alt="Generic placeholder image"></img>
          <div className="media-body">
            <h5 className="mt-0">
              { recommendation.name }
            </h5>
              A { recommendation.family } Tea from { recommendation.country } whose top five most liked
              flavors by Teally users are <span className="tea-flavors">{ recommendation.favorite_flavors.slice(0, 4).join(', ') }, and {recommendation.favorite_flavors[5]} </span>
            <br></br>
              Click <a href={recommendation.info} target="_blank"><span>here</span></a> for more information.
          </div>
        </div>
      )})

    //const recommendations = [] 
    
    // for (let i = 0; i < 5; i++) {
    //   recommendations.push(recommendedTeas[i])
    // }

    return(
      <div>
        <div className="media">
          <div className="media-body">
            <h5>Based on past tastings, your top five favorite flavors are <span className="tea-flavors">{ this.props.user.favorite_flavors.slice(0, 4).join(', ') }, and {this.props.user.favorite_flavors[5]}</span>. {''}</h5>
            <h5>Here are some teas we think you would like:</h5>
          </div>
        </div>
        <div>
          {Recommendations}
        </div>
        {/* {recommendedTeas.map(recommendation => {
          <div className="media">
            <img className="media-image col-sm-2" src={recommendation.picture} alt="Generic placeholder image"></img>
            <div className="media-body">
              <h5 className="mt-0">
                { recommendation.name }
              </h5>
                A { recommendations.family } Tea from { recommendations.country } whose top five most liked
                flavors by Teally users are <span className="tea-flavors">{ recommendation.favorite_flavors.slice(0, 4).join(', ') }, and {recommendation.favorite_flavors[5]} </span>
              <br></br>
                Click <a href={recommendation.info} target="_blank"><span>here</span></a> for more information.
            </div>
          </div>  
        })} */}


        {/* <div className="media">
          <img className="media-image col-sm-2" src={recommendations[0].picture} alt="Generic placeholder image"></img>
          <div className="media-body">
            <h5 className="mt-0">
              { recommendations[0].name }
            </h5>
              A { recommendations[0].family } Tea from { recommendations[0].country } whose top five most liked
              flavors by Teally users are <span className="tea-flavors">{ recommendations[0].favorite_flavors.slice(0, 4).join(', ') }, and {recommendations[0].favorite_flavors[5]} </span>
            <br></br>
              Click <a href={recommendations[0].info} target="_blank"><span>here</span></a> for more information.
          </div>
        </div>  

        <div className="media">
          <img className="media-image col-sm-2" src={recommendations[1].picture} alt="Generic placeholder image"></img>
          <div className="media-body">
            <h5 className="mt-0">
              { recommendations[1].name }
            </h5>
              A { recommendations[1].family } Tea from { recommendations[1].country } whose top five most liked
              flavors by Teally users are <span className="tea-flavors">{ recommendations[1].favorite_flavors.slice(0, 4).join(', ') }, and {recommendations[1].favorite_flavors[5]} </span>
            <br></br>
              Click <a href={recommendations[1].info} target="_blank"><span>here</span></a> for more information.
          </div>
        </div>  

        <div className="media">
          <img className="media-image col-sm-2" src={recommendations[2].picture} alt="Generic placeholder image"></img>
          <div className="media-body">
            <h5 className="mt-0">
              { recommendations[2].name }
            </h5>
              A { recommendations[2].family } Tea from { recommendations[2].country } whose top five most liked
              flavors by Teally users are <span className="tea-flavors">{ recommendations[2].favorite_flavors.slice(0, 4).join(', ') }, and {recommendations[2].favorite_flavors[5]} </span>
            <br></br>
              Click <a href={recommendations[2].info} target="_blank"><span>here</span></a> for more information.
          </div>
        </div>  

        <div className="media">
          <img className="media-image col-sm-2" src={recommendations[3].picture} alt="Generic placeholder image"></img>
          <div className="media-body">
            <h5 className="mt-0">
              { recommendations[3].name }
            </h5>
              A { recommendations[3].family } Tea from { recommendations[3].country } whose top five most liked
              flavors by Teally users are <span className="tea-flavors">{ recommendations[3].favorite_flavors.slice(0, 4).join(', ') }, and {recommendations[3].favorite_flavors[5]} </span>
            <br></br>
              Click <a href={recommendations[3].info} target="_blank"><span>here</span></a> for more information.
          </div>
        </div>  

        <div className="media">
          <img className="media-image col-sm-2" src={recommendations[4].picture} alt="Generic placeholder image"></img>
          <div className="media-body">
            <h5 className="mt-0">
              { recommendations[4].name }
            </h5>
              A { recommendations[4].family } Tea from { recommendations[4].country } whose top five most liked
              flavors by Teally users are <span className="tea-flavors">{ recommendations[4].favorite_flavors.slice(0, 4).join(', ') }, and {recommendations[4].favorite_flavors[5]} </span>
            <br></br>
              Click <a href={recommendations[4].info} target="_blank"><span>here</span></a> for more information.
          </div>
        </div>   */}
        
  
      </div>
    )
  }
}

export default Recommendation