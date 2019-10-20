import React from "react";

function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <button onClick={() => props.history.push("/register")}>Register</button>
      <button onClick={() => props.history.push("/signin")}>Sign in</button>
    </div>
  );
}

export default Welcome;
