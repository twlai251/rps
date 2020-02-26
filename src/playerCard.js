import React from 'react';

const scissors = "https://i.pinimg.com/originals/bf/8c/2b/bf8c2ba6ae2d088eebe4f1892a7617e1.jpg"
const rock = "https://i.quotev.com/img/q/u/17/5/10/zyw7764b2k.jpg"
const paper = "https://cdn.dribbble.com/users/212649/screenshots/3067233/screen-shot-2016-11-03-at-11.40.43.png"

const Playercard = (props) => {

  const sign = props.sign;
  let image = " ";

  if(sign === "rock"){
    image = rock;
  }
  else if (sign === "scissors"){
    image = scissors;
  }
  else {
    image = paper;
  }

  return(
    <div className="player-card">
    <img src={image}/>
    </div>
  )
};


export default Playercard;
