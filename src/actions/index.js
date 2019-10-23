import axios from "axios";
import history from "../history";
import { axiosWithAuth } from "../utilities/AxiosWithAuth";

const registerEndPoint =
  "https://party-planner-ls.herokuapp.com/api/auth/register";
const signEndPoint = "https://party-planner-ls.herokuapp.com/api/auth/login";
const getUserEventsEndPoint = "";
const getAllEventsEndPoint = "";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const SIGN_USER_START = "SIGN_USER_START";
export const SIGN_USER_SUCCESS = "SIGN_USER_SUCCESS";
export const SIGN_USER_FAILURE = "SIGN_USER_FAILURE";

export const GET_USER_EVENTS_START = "GET_USER_EVENTS_START";
export const GET_USER_EVENTS_SUCCESS = "GET_USER_EVENTS_SUCCESS";
export const GET_USER_EVENTS_FAILURE = "GET_USER_EVENTS_FAILURE";

export const GET_ALL_EVENTS_START = "GET_ALL_EVENTS_START";
export const GET_ALL_EVENTS_SUCCESS = "GET_ALL_EVENTS_SUCCESS";
export const GET_ALL_EVENTS_FAILURE = "GET_ALL_EVENTS_FAILURE";

export const registerUser = user => {
  return dispatch => {
    dispatch({ type: REGISTER_USER_START });
    axios
      // dumby endpoint for development purposes
      // .post("https://jsonplaceholder.typicode.com/posts")
      .post(registerEndPoint, user)
      .then(res => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
        console.log("im res from register", res);
        history.push("/");
      })
      .catch(error => {
        dispatch({ type: REGISTER_USER_FAILURE, payload: error });
      });
  };
};
export const signIn = user => {
  return dispatch => {
    dispatch({ type: SIGN_USER_START });
    axios
      .post(signEndPoint, user)
      // dumby endpoint for development purposes
      // .post("https://jso")

      .then(res => {
        dispatch({ type: SIGN_USER_SUCCESS, payload: res.data });
        console.log("im res from sign in", res);
        localStorage.setItem("token", res.data.token);
        history.push("/userpage");
      })
      .catch(error => dispatch({ type: SIGN_USER_FAILURE, payload: error }));
  };
};
export const getUserEvents = () => {
  return dispatch => {
    dispatch({ type: GET_USER_EVENTS_START });
    axios
      .get(getUserEventsEndPoint)
      .then(res => {
        dispatch({ type: GET_USER_EVENTS_SUCCESS, payload: res.data });
      })
      .catch(error =>
        dispatch({ type: GET_USER_EVENTS_FAILURE, payload: error })
      );
  };
};
export const getALLEvents = () => {
  return dispatch => {
    dispatch({ type: GET_ALL_EVENTS_START });
    axios
      .get(getAllEventsEndPoint)
      .then(res => {
        dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
      })
      .catch(error =>
        dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
      );
  };
};
