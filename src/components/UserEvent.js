import React, { useState } from "react";
import Styled from "styled-components";
import { deleteItem, editItem } from "../actions";
import { connect } from "react-redux";
import { numberTypeAnnotation } from "@babel/types";

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
  align-items: start;
  opacity: 0.8;
  transition: opacity 0.5s;
  transition: scale();
  border-radius: 10px;
  color: #90949c;
  line-height: 1;
  box-shadow: black 5px 5px 20px;
  `

const UserEvent = props => {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState({
    title: "",
    guestNumber: "",
    date: "",
    budget: "",
    entertainment: "",
    shoppingList: ""
  });

  const onSaveSubmit = e => {
    console.log("onSaveSubmit().");
    e.preventDefault();
    props.editItem(input);
    setEditing(!editing);
  };

  const handleChange = e => {
    console.log("handlechange");
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  console.log(props);
  return (
    <>
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
        <button
          onClick={() => {
            setEditing(!editing);
            setInput(props.index);
          }}
          className="submitbtn btn"
        >
          Edit
        </button>
        <button
          className="submitbtn btn"
          onClick={() => {
            console.log("click");
            props.deleteItem(props.index.id);
          }}
        >
          Delete
        </button>
      </CardDiv>

      {editing ? (
        <form onSubmit={onSaveSubmit}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Your Party Name"
            value={input.title}
          />

          <input
            type="text"
            name="guestNumber"
            onChange={handleChange}
            placeholder="Enter Amount of Guests Attending"
            value={input.guestNumber}
          />

          <input
            type="text"
            name="date"
            onChange={handleChange}
            placeholder="Enter The Date of the Party"
            value={input.date}
          />

          <input
            type="text"
            name="budget"
            onChange={handleChange}
            placeholder="Enter the Budget of the Party"
            value={input.budget}
          />

          <input
            type="text"
            name="entertainment"
            onChange={handleChange}
            placeholder="Enter what Entertainment will be at the Party"
            value={input.entertainment}
          />

          <input
            type="text"
            name="shoppingList"
            onChange={handleChange}
            placeholder="Enter what is needed for the Party"
            value={input.shoppingList}
          />

          <button>save edits</button>
        </form>
      ) : null}
    </>
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

  { deleteItem, editItem }
)(UserEvent);
