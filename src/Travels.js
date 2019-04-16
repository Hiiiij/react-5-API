import React from "react";
import Travel from "./Travel";
const travels = [
    {
        destination:"Berlin,",
        country:"Germany",
        Photo:"https://images.unsplash.com/photo-1545375206-dcef3c51084f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        distance: "here and now"

    },        
{

    destination:"La,",
    country:"USA",
    Photo:"https://images.unsplash.com/photo-1493679756707-21f12da1a0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80.unsplash.com/photo-1534816721242-e07ab9f3b5b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    distance: "5,781 miles away"
},
{
    destination:"Warsaw,",
    country:"Poland",
    Photo:"https://images.unsplash.com/photo-1496046906094-ab55b3670ea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    distance: "320.88 miles away"
},    
{

    destination:"London,",
    country:"UK",
    Photo:"https://images.unsplash.com/photo-1476958526483-36efcaa80b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80://images.unsplash.com/photo-1496046906094-ab55b3670ea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    distance: "	578.58 away"
},
{

    destination:"Tokyo,",
    country:"Japan",
    Photo:"https://images.unsplash.com/photo-1493514901090-977e25adc0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    distance: "5.536 miles away"
}
]



const Travels = () => (  
    travels.map((travelCard, index) => (
      <tr>
        <Travel key={"travel-" + index} 
          destination={travelCard.destination} 
          country={travelCard.country}
          Photo={travelCard.Photo}
          distance={travelCard.distance} />
      </tr>        
    ))
  );


export default Travels;

