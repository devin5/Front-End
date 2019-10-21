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
  .catch(err => console.log("Error", err));

  setInput({
    guestNumber: "",
    date: "",
    budget: "",
    entertainment: "",
    shoppingList: ""
  });

  return (
    <form onSubmit={submitForm}>
      <Input 
      type="text"
      name="guestNumber"
      onChange={handleChange}
      placeholder="Enter Amount of Guests Attending"
      value={input.guestNumber}
      />
      <Input 
      type="text"
      name="date"
      onChange={handleChange}
      placeholder="Enter The Date of the Party"
      value={input.date}
      />
      <Input 
      type="text"
      name="budget"
      onChange={handleChange}
      placeholder="Enter the Budget of the Party"
      value={input.budget}
      />
      <Input 
      type="text"
      name="entertainment"
      onChange={handleChange}
      placeholder="Enter what Entertainment will be at the Party"
      value={input.entertainment}
      />
      <Input 
      type="text"
      name="shoppingList"
      onChange={handleChange}
      placeholder="Enter what is needed for the Party"
      value={input.shoppingList}
      />
    </form>
  )
  
}

export default CreateEventForm;
