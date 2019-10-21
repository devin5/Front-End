import React, { useState } from "react";
import axiosWithAuth from "../utilities/AxiosWithAuth";

function CreateEventForm(props) {
  
  const [input, setInput] = useState({
    guestNumber: "",
    date: "",
    budget: "",
    entertainment: "",
    shoppingList: ""
  });

  const handleChange = e => {

  };

  const submitForm = e => {
    e.preventDefault();
  };

  axiosWithAuth()
  .get()
  .then(res =>
    console.log(res))
    .catch(err => console.log("Error", err))
  
}

export default CreateEventForm;
