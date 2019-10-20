import React from "react";
// components
import Welcome from "./components/Welcome";
import RegisterForm from "./components/RegisterForm";
import SignInForm from "./components/SignInForm";
import Banner from "./components/Banner";
import AllEventsPage from "./components/AllEventsPage";
// css
import "./App.css";
// Routing
import { Route, Redirect } from "react-router-dom";
// for Protected routing
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

function App() {
  return (
    <div className="App">
      <Banner />
      <Route exact path="/" component={Welcome} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/signin" component={SignInForm} />
      <Route path="/alleventspage" component={AllEventsPage} />
    </div>
  );
}

export default App;
