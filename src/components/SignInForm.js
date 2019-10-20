import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import { Link } from "react-router-dom";

function SignInForm(props) {
  const [input, setInput] = useState({});

  const handleChanges = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.signIn(input);
    setInput({
      username: "",
      password: ""
    });
  };
  return (
    <>
      Sign In Form
      {props.isLogging && <div>Loading</div>}
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="username"
          onChange={handleChanges}
          placeholder="Enter Username"
          value={input.username}
        />
        <input
          type="password"
          name="password"
          onChange={handleChanges}
          placeholder="Enter Password"
          value={input.password}
        />

        <button>Submit</button>
      </form>
      <Link to="/">
        <button>Back</button>
      </Link>
      {props.error && <div>{props.error.message}</div>}
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { signIn }
)(SignInForm);
