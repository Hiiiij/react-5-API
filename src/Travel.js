import React from "react";



const Travel = ({ destination, country, Photo,distance }) => (
  <figure >
    <img src={Photo} alt={destination} width= "800px" height="500px" />
    <description>
      <h2>{destination} {country}</h2>
      <p>{distance}</p>
    </description>
  </figure>
);



export default Travel;
