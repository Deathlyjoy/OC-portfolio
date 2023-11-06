//---------- REACT ----------
import React, { Component } from "react";
//import Modal from "react-modal";

//---------- COMPONENTS ----------
import Header from "./components/Header";
import Footer from "./components/Footer";

//---------- CSS ----------
import "./scss/App.scss";

//---------- JSON ----------
import sharedData from './data/portfolio_shared_data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      sharedData: sharedData,
    };
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info}/>
        <Footer sharedBasicInfo={this.state.sharedData.basic_info}/>
      </div>
    );
  }
}

export default App;
