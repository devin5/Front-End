import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  const clickPush = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div className="banner">
      <nav>
        <div>
          <img className="logo" src="" alt="" />
          Logo goes here;
        </div>
        <div className="links">
          {localStorage.getItem("token") ? (
            <Link to="/allevents">All Events</Link>
          ) : null}
          {localStorage.getItem("token") ? (
            <Link to="/userpage">My Events</Link>
          ) : null}
        </div>
        <div className="register">
          {localStorage.getItem("token") ? (
            <button onClick={clickPush}>Log Out</button>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Banner;
