import React from 'react'

const Tea = props => {
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          { props.data.name }
        </div>
        <div className="col">
          { props.data.family }
        </div>
        <div className="col">
          { props.data.country}
        </div>
        <div className="col">
          Favorite flavors: 
        </div>
        {/* <div className="col">
            <img src={props.data.tea.picture}></img>
          </div> */}
      </div>
    </div>
  )
}

export default Tea