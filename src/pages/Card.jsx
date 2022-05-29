import React from 'react'

function Card(props) {
  return (
      <div className="cards">
          <div className="card card-1" style={{backgroundColor:"red"}}>
                <div>{props.card_icon}</div>
                <p>{props.card_exit}</p>
                <h2>{props.body}</h2>
          </div>

     </div>
  )
}

export default Card