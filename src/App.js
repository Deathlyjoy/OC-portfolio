import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

// ---------- Importing the json data ----------
import sharedData from './data/portfolio_shared_data.json';


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: sharedData,
    };
  }  
  
  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        
      </div>
    );
  }
}

export default App;
