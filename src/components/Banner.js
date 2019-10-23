import React from "react";
import { Link } from 'react-router-dom';

function Banner(props) {
  return (
    <div className="banner">
      <nav>
        <div>
          <img className="logo" src="" alt="" />Logo goes here;
        </div >
        <div className = "links">
          {localStorage.getItem("token") ? <Link to = "" >All Events</Link> : null }
          {localStorage.getItem("token") ? <Link to = "" >My Events</Link> : null }
        </div>
        <div className="register">
        {localStorage.getItem("token") ?  <Link  to = "" >Log Out</Link> : null} 
       </div>
      </nav>
    </div>
  );
}

export default Banner;
