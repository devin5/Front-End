import React, { useState, useEffect } from "react";
import axios from "axios";
import UserEvent from "./UserEvent";
const data = [
  {
    id: 0,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo",
    title: "devins party"
  },
  {
    id: 1,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo",
    title: "devins party"
  },
  {
    id: 2,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo",
    title: "devins party"
  },
  {
    id: 3,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo",
    title: "devins party"
  },
  {
    id: 4,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo",
    title: "devins party"
  },
  {
    id: 5,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo",
    title: "devins party"
  }
];
function UserPage() {
  // useEffect(() =>{
  //   axios
  //   .get()
  //   .then()
  //   .catch()
  // })

  return (
    <div className="userevent">
      {data.map(index => (
        <UserEvent index={index} />
      ))}
    </div>
  );
}

export default UserPage;
