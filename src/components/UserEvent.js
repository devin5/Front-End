<<<<<<< HEAD
import React from 'react';
import Styled from 'styled-components'


const CardDiv = Styled.div `
  width:  25%;
  display: flex;
  flex-wrap: wrap;
  border: #354356 1px solid;
  margin-bottom: 30px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: #354356;
  align-items: center;
  opacity: 0.8;
  transition: opacity 0.5s;
  transition: scale();
  border-radius: 10px;
  color: #90949c;
  line-height: 1;
  box-shadow: black 5px 5px 20px;
  `

const UserPage = props => {
  return (
    // <CardDiv className="userpage">
    //   <h1>{title}</h1>
    //   <p>Number of Guests: </p><h3>{props.guestNumber}</h3>
    //   <p>Date of your Party:</p> <h3>{props.date}</h3>
    //   <p>Your Party budget:</p> <h3>{props.budget}</h3>
    //   <p>The entertainment for your Party: </p><h3>{props.entertainment}</h3>
    //   <p>The items needed for your Party: </p><h3>props.{shoppingList}</h3>
    //   <button className = "submitbtn btn">Edite</button>
    //   <button className = "submitbtn btn">Delete</button>
    //  </CardDiv>
    <>
    </>
=======
import React from "react";

const UserPage = props => {
  return (
    // <></>
    <div className="userpage">
      <h1>{props.index.title}</h1>
      Number of Guests: <h3>{props.index.guestNumber}</h3>
      Date of your Party: <h3>{props.index.date}</h3>
      Your Party budget: <h3>{props.index.budget}</h3>
      The entertainment for your Party: <h3>{props.index.entertainment}</h3>
      The items needed for your Party: <h3>{props.index.shoppingList}</h3>
    </div>
>>>>>>> 0fa17f1679839f25416ecd23330161a39a1e9566
  );
};

export default UserPage;
