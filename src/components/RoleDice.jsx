import {useState} from 'react';
import styled from "styled-components";
const RoleDice = ({currentDice,roleDice}) => {
  

  
  return (
    <DiceContainer>
    <div className="dice"
    onClick={roleDice}>
     <img src={`/images/diceno/dice${currentDice}.png `} alt="dice 1"/>
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
   
  )
}
const DiceContainer=styled.div`
margin-top:48px;
 display:flex;
 flex-direction:column;
 align-items:center;
 p{
    font-size:24px;
 }
img{
    max-width:250px;
    height:250px;
}
.dice{
    cursor:pointer;
}
`;
export default RoleDice
