import Card from './components/Card';
import Experience from './components/Experience';
import Skills from './components/Skills';
import React, { Component } from "react";
import Modal from "react-modal";
import "./App.scss";
import "./scss/modal.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import ServiceCards from "./components/ServicesCards";

import data from "./data/service_french.json";
import sharedData from './data/portfolio_shared_data.json';
import language from "./data/res_language.json"

Modal.setAppElement("#root");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: data,
      sharedData: sharedData,
      languagedata: language
    };
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects resumeProjects={this.state.languagedata.projects} />
        <ServiceCards services={data.services} />
        {/* Add other components here */}
        <Skills />
        <About resumeBasicInfo={this.state.languagedata.basic_info} />
        <Experience resumeExperience={this.state.languagedata.experience} />
        <Card />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
