import React from "react";
import { Icon } from "@iconify/react";
import seoIcon from "@iconify/icons-icon-park/seo";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import profilepic from "../assets/cresson-alexis.webp";

const About = ({ resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo?.section_name.about;
  const hello = resumeBasicInfo?.description_header;
  const about = resumeBasicInfo?.description;

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <figure className="col-md-4 mb-5 center">
            <a href="https://www.linkedin.com/in/alexis-cresson/" target="_blank" rel="noopener noreferrer">
              <img height="200px" src={profilepic} alt="Avatar placeholder" />
            </a>
            <figcaption>
              <Icon icon={seoIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} />
              <Icon icon={reactIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} />
              <Icon icon={vueIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} />
            </figcaption>
          </figure>
          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span>
                  &nbsp;
                  <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span>
                  &nbsp;
                  <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                </div>
                <div className="card-body font-trebuchet text-justify ml-3 mr-3" style={{ height: "auto", fontSize: "132%", lineHeight: "200%" }}>
                  <br />
                  <span className="wave">{hello} </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
