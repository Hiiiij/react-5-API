import React from "react";

const Travel = ({ destination, country, Photo,distance }) => (
  <figure>
    <img src={Photo} alt={destination} width= "500px" height="300px" />
    <figcaption>
      <blockquote>{destination} {country}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);


export default Travel;
