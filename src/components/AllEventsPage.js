import React, { useState, useEffect } from "react";
import axios from "axios";
import UserEvent from "./UserEvent";

function AllEventsPage() {

  useEffect(() =>{
    axios
    .get()
    .then()
    .catch()
  })

  return (
    <div className="userevent">
      {X.map(index =>(
        <UserEvent index={index}/>
      ))}
    </div>
  );
}

export default AllEventsPage;
