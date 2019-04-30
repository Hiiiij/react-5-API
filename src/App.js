import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote.js";
import Button from "./Button";

const defaultSims = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    //"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
    "https://thesimpsonsquoteapi.glitch.me/quotes?count=num"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySims: defaultSims
    };
  }

  getAPI() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          mySims: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
     
          <h1 className="App-title">Laugh me</h1>
          <Button selectChar={() => this.getAPI()} />
          <Quote mySims={this.state.mySims} />
       
      </div>
    );
  }
}

export default App;
