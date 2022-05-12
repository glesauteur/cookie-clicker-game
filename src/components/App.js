import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import useInterval from "../hooks/use-interval.hook";
import { GameContext } from "./GameContext";

function App(props) {
  const { numCookies, setNumCookies, purchasedItems, setPurchasedItems, cookiesPerSecond } =
    React.useContext(GameContext);

    useInterval(() => {
      let timeElpased = Math.round(
        (Date.now() - numCookies.lastUpdatedDate) / 1000
      );
      setNumCookies({cookies: numCookies.cookies + cookiesPerSecond * timeElpased, lastUpdatedDate: Date.now()});
    }, 1000);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
