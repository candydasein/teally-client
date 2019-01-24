import React from 'react'

const Recommendation = props => {

  const userFlavors = props.user.flavors.map(flavor => flavor.name)

  const flavorFrequency = {}

  for (let i = 0; i < userFlavors.length; i++) {
    const num = userFlavors[i]
    flavorFrequency[num] = flavorFrequency[num] ? flavorFrequency[num] + 1 : 1
  }

  const sortableFlavors = []
  for (const flavor in flavorFrequency) {
    sortableFlavors.push([flavor, flavorFrequency[flavor]])
  }

  const sortedFavoriteFlavors = sortableFlavors.sort((a, b) => b[1] - a[1]).slice(0, 5)
  
  const top5 = sortedFavoriteFlavors.flat()
    .filter(item => typeof item === 'string')
    .join(', ') 

  console.log('user\'s top 5 are', top5)
  
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          { props.user.email }
        </div>
        <div className="col">
          { top5 }
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

export default Recommendation