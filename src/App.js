import HomePage from "./Components/HomePage/HomePage";
import MoviePage from "./Components/MoviePage/MoviePage";
import MovieSearch from "./Components/MovieSearch/MovieSearch";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Saved from "./Components/Saved/Saved";

import { useTransition, animated } from "react-spring";
import { __RouterContext } from "react-router";

import React, { useContext } from "react";

function App() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });
  return (
    <div className="App">
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" component={HomePage} exact></Route>

            <Route path="/movie" component={MoviePage}></Route>
            <Route path="/movies" component={MovieSearch}></Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/saved">
              <Saved></Saved>
            </Route>
          </Switch>
        </animated.div>
      ))}{" "}
    </div>
  );
}

export default App;
