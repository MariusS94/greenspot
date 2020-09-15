import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/welcome"></Route>
          <Route path="/home"></Route>
          <Route path="/menue"></Route>
          <Route path="/forecast"></Route>
          <Route path="/forecast/zipcode"></Route>
          <Route path="/">
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
