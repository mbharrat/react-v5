import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

//stateful class component
class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the button");
  }
  render() {
    //   return (
    //     <div>
    //       <h1>Adopt Me!</h1>
    //       <Pet name="Scamp" animal="Dog" breed="Yorkie" />
    //       <Pet name="Teddy" animal="Dog" breed="Yorkie" />
    //       <Pet name="Blondie" animal="Rodent" breed="Gerbil" />
    //       <button onClick={this.handleTitleClick}></button>
    //     </div>
    //   );
    // }
    return (
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
