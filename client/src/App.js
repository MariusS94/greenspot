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
import Forecast from "./pages/Forecast";
import Note from "./pages/Note";
import ViewPortContainer from "./components/ViewPortContainer";

function App() {
  return (
    <ViewPortContainer>
      <Router>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/energy/home">
            <Home />
          </Route>
          <Route path="/energy/forecast/:zip">
            <Forecast />
          </Route>
          <Route path="/news/home">
            <Note />
          </Route>
          <Route path="/mobility/home">
            <Note />
          </Route>
          <Route path="/options">
            <Note />
          </Route>
          <Route path="/">
            <Redirect to="/energy/home"></Redirect>
          </Route>
          <Route></Route>
        </Switch>
      </Router>
    </ViewPortContainer>
  );
}

export default App;
