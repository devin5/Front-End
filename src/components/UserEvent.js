import React from "react";
import Styled from "styled-components";
import { deleteItem } from "../actions";
import { connect } from "react-redux";

const CardDiv = Styled.div`
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
  `;

const UserEvent = props => {
  console.log(props);
  return (
    <CardDiv className="userpage">
      <h1>{props.index.title}</h1>
      <p>Number of Guests:</p> <h3>{props.index.guestNumber}</h3>
      <p>Date of your Party: </p>
      <h3>{props.index.date}</h3>
      <p>Your Party budget:</p> <h3>{props.index.budget}</h3>
      <p>The entertainment for your Party:</p>{" "}
      <h3>{props.index.entertainment}</h3>
      <p>The items needed for your Party: </p>
      <h3>{props.index.shoppingList}</h3>
      <button className="submitbtn btn">Edite</button>
      <button
        className="submitbtn btn"
        onClick={() => {
          console.log("click");
          deleteItem(props.index.id);
        }}
      >
        Delete
      </button>
    </CardDiv>
  );
};

const mapStateToProps = state => {
  return {
    // user: state.user,
    events: state.events,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(
  mapStateToProps,

  { deleteItem }
)(UserEvent);
