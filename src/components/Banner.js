import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

function Banner(props) {
  console.log("banner props", props);
  const clickPush = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    props.history.push("/");
  };

  const myid = localStorage.getItem("id");

  return (
    <div className="banner">
      <nav>
        <div>
          <img src={Logo} alt="" width="300px" height="50px" />
        </div>
        <div className="links">
          {localStorage.getItem("token") ? (
            <Link to={`allevents${myid.toString()}`}>All Events</Link>
          ) : null}
          {localStorage.getItem("token") ? (
            <Link to={`userpage${myid.toString()}`}>My Events</Link>
          ) : null}
        </div>
        <div className="register">
          {localStorage.getItem("token") ? (
            <button className = "logout" onClick={clickPush}>Log Out</button>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Banner;
