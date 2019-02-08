import React from 'react'

const Tea = props => {
  return(
    <div className="media">
      <img className="media-image col-sm-2" src={props.tea.picture} alt="Generic placeholder image"></img>
      <div className="media-body">
        <h5 className="mt-0">
          { props.tea.name }
        </h5>
          A { props.tea.family } Tea from { props.tea.country} whose top five most liked
          flavors by Teally users are <span className="tea-flavors">{ props.tea.favorite_flavors.slice(0, 4).join(', ') }, and {props.tea.favorite_flavors[5]} </span>
        <br></br>
          Click <a href={props.tea.info} target="_blank"><span>here</span></a> for more information.
        
      </div>
    </div>
  )
}

export default Tea
 