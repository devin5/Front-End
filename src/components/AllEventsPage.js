import React, { useState, useEffect } from "react";
import axios from "axios";
import AllEvent from "./AllEvent";
import { connect } from "react-redux";

function AllEventsPage(props) {
  //   useEffect(() => props{
  //     axios
  //       .get()
  //       .then()
  //       .catch();
  //   });

  return (
    <div className="userevent">
      {props.events.map(index => (
        <AllEvent index={index} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // user: state.user,
    events: state.events,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  null
)(AllEventsPage);
