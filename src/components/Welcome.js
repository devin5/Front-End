import React from "react";
import { Link } from 'react-router-dom'

function Welcome(props) {
  return (
    <div className="welcome">
      <h1 className = "wel-h1">Welcome</h1>
      <div className = "welcom-links">
        <Link to = "/register" onClick={() => props.history.push("/register")}>Register</Link> <p> or </p> 
        <Link  to = "/signin" onClick={() => props.history.push("/signin")}>Log In</Link>
      </div>
      {/* <button onClick={() => props.history.push("/register")}>Register</button>
      <button onClick={() => props.history.push("/signin")}>Sign in</button> */}
    </div>
  );
}

export default Welcome;