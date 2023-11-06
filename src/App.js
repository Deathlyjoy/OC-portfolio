//---------- REACT ----------
import React, { Component } from "react";
//import Modal from "react-modal";

//---------- COMPONENTS ----------
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

//---------- CSS ----------
import "./scss/App.scss";

//---------- JSON ----------
import resumeData from './data/res_primaryLanguage.json';
import sharedData from './data/portfolio_shared_data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: resumeData,
      sharedData: sharedData,
    };
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info}/>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info}/>
      </div>
    );
  }
}

export default App;
