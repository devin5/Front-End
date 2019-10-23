import React, { useState, useEffect } from "react";
import axios from "axios";
import UserEvent from "./UserEvent";

data = [
  {
    id: 0,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo"
  },
  {
    id: 1,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo"
  },
  {
    id: 2,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo"
  },
  {
    id: 3,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo"
  },
  {
    id: 4,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo"
  },
  {
    id: 5,
    guestNumber: "5",
    date: "4",
    budget: "6787",
    entertainment: "jay-z, kanya west",
    shoppingList: "toiletress, spongebob, oswaldo"
  }
];
function AllEventsPage() {
  //   useEffect(() => {
  //     axios
  //       .get()
  //       .then()
  //       .catch();
  //   });

  return (
<<<<<<< HEAD
    // <div className="userevent">
    //   {X.map(index =>(
    //     <UserEvent index={index}/>
    //   ))}
    // </div>
    <>
    </>
=======
    <div className="userevent">
      {data.map(index => (
        <UserEvent index={index} />
      ))}
    </div>
    /* <></> */
>>>>>>> 0fa17f1679839f25416ecd23330161a39a1e9566
  );
}

export default AllEventsPage;
