import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Menue from "./pages/Menue";
import Forecast from "./pages/Forecast";
import ZipForecast from "./pages/ZipForecast";
import ZipInput from "./pages/ZipInput";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/menue">
            <Menue />
          </Route>
          <Route exact path="/forecast">
            <Forecast />
          </Route>
          <Route path="/forecast/:zip">
            <ZipForecast />
          </Route>
          <Route path="/zipinput">
            <ZipInput />
          </Route>
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
