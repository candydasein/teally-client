import React from 'react'

const TeaRecommendation = props => {
  
  
  return(
    props.recommendedTeas.map(tea => {
      <div className="container">
        <div className="row">
          <div className="col">
            { tea.name }
          </div>
          <div className="col">
            { tea.family }
          </div>
          <div className="col">
            { tea.country}
          </div>
          <div className="col">
            <span style={{fontWeight: '700'}}>Top 5 favorite flavors:</span> { tea.favorite_flavors.slice(0, 5).join(', ') }
          </div>
          <div className="col">
            <img className="tea-picture" src={tea.picture}></img>
          </div>
        </div>
      </div>
    })
  )
}

export default TeaRecommendation
 