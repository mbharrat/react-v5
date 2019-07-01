import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

//stateful class component
class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Scamp",
        animal: "Dog",
        breed: "Yorkie"
      }),
      React.createElement(Pet, {
        name: "Teddy",
        animal: "Dog",
        breed: "Yorkie"
      }),
      React.createElement(Pet, {
        name: "Fog",
        animal: "Gerbil",
        breed: "American Gerbil"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
