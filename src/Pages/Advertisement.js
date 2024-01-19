import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
// import  '../index.css';
 
const Advertisement = () => {
  const [isFlipped, setIsFlipped]= useState(false);
   const flipCard=()=>{
    setIsFlipped(!isFlipped);
   };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
   <div style={{
    backgroundColor :'green',
    height: 100,
    color:"#fff",
    display: "flex",
    justifyContent:"center",
    alignItems :" center"
   }}>
 How do you define the meaning of sucess ?
 <button onClick={flipCard}>Click to flip </button>
   </div>
   <div style={{
    backgroundColor :'red',
    height: 100,
    color:"#fff",
    display: "flex",
    justifyContent:"center",
    alignItems :" center"
   }}>
  create  vido on youtub
 <button onClick={flipCard}>Click to flip </button>
   </div>
   </ReactCardFlip>
  )
}

export default Advertisement;