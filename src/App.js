import React from "react";
import Details from "./Details";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";

//stateful class component
class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the button");
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
