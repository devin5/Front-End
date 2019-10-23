import React from "react";
// components
import Welcome from "./components/Welcome";
import RegisterForm from "./components/RegisterForm";
import SignInForm from "./components/SignInForm";
import Banner from "./components/Banner";
import UserPage from "./components/UserPage";
import Footer from "./components/Footer";

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
      {/* <Banner /> */}
      <Route path="/" component={Banner} />
      <div className="content">
        <Route exact path="/" component={Welcome} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/userpage" component={UserPage} />
      </div>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
