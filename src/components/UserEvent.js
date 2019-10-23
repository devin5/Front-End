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
  );
};

export default UserPage;
