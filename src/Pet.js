import React from "react";

//stateless functional components
//this is destructuring of props
//can also write like
//const Pet = props => {} but must use props.name, props.animal, props.breed
export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
}