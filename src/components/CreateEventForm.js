import React, { useState } from "react";

function CreateEventForm(props) {
  const [input, setInput] = useState({
    guestNumber: "",
    date: "",
    budget: "",
    entertainment: "",
    shoppingList: ""
  });

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    setInput({
      title: "",
      guestNumber: "",
      date: "",
      budget: "",
      entertainment: "",
      shoppingList: ""
    });
  };

  return (
    <form onSubmit={submitForm}>
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateEventForm;
