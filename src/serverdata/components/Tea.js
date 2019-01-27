import React from 'react'

const Tea = props => {
  const teaFlavors = props.tea.flavors.map(flavor => flavor.name)

  const flavorFrequency = {}

  for (let i = 0; i < teaFlavors.length; i++) {
    const num = teaFlavors[i]
    flavorFrequency[num] = flavorFrequency[num] ? flavorFrequency[num] + 1 : 1
  }

  const sortableFlavors = []
  for (const flavor in flavorFrequency) {
    sortableFlavors.push([flavor, flavorFrequency[flavor]])
  }

  const sortedFavoriteFlavors = sortableFlavors.sort((a, b) => b[1] - a[1]).slice(0, 5)
  
  const TeaTop5 = sortedFavoriteFlavors.flat()
    .filter(item => typeof item === 'string')
    .join(', ') 
  
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          { props.tea.name }
        </div>
        <div className="col">
          { props.tea.family }
        </div>
        <div className="col">
          { props.tea.country}
        </div>
        <div className="col">
          <span style={{fontWeight: '700'}}>Top 5 favorite flavors:</span> { TeaTop5 }
        </div>
        <div className="col">
          <img className="tea-picture" src={props.tea.picture}></img>
        </div>
      </div>
    </div>
  )
}

export default Tea
module.export = this.TeaTop5  