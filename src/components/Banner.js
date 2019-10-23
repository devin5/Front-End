import React from "react";
import { Link } from 'react-router-dom';
import Logo from './logo.png'


function Banner(props) {
  return (
    <div className="banner">
      <nav>
        <div>
          <img src ={Logo} alt="" width = "300px" height = "50px"/>
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
