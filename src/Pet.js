import React from "react";

//stateless functional components
//this is destructuring of props
//can also write like
//const Pet = props => {} but must use props.name, props.animal, props.breed
// export default function Pet({ name, animal, breed }) {
//   // return React.createElement("div", {}, [
//   //   React.createElement("h1", {}, name),
//   //   React.createElement("h2", {}, animal),
//   //   React.createElement("h2", {}, breed)
//   // ]);
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{animal}</h2>
//       <h2>{breed}</h2>
//     </div>
//   );
// }

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
}
