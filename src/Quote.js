import React from "react";

const Quote = ({ mySims }) => {
  return(
  <figure>
    <img src={mySims.image} alt={mySims.character} />
    <figcaption>
      <h2>{mySims.quote}</h2>
      <p>{mySims.character}</p>
    </figcaption>
  </figure>
);
  }
export default Quote;
