import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
    const sectionName = resumeBasicInfo.section_name.experience;

    return (
        <section id="resume" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h2 className="section-title">
                        <span className="text-black" style={{ textAlign: "center" }}>
                            {sectionName}
                        </span>
                    </h2>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {resumeExperience && resumeExperience.map((work, i) => {
                        const mainTech = work.mainTech.map((technology, index) => (
                            <Badge pill className="main-badge mr-2 mb-2" key={index}>
                                {technology}
                            </Badge>
                        ));
                        const tech = work.technologies.map((technology, index) => (
                            <Badge pill className="experience-badge mr-2 mb-2" key={index}>
                                {technology}
                            </Badge>
                        ));
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={work.years}
                                iconStyle={{
                                    background: "#A9A7A7",
                                    color: "#fff",
                                    textAlign: "center",
                                }}
                                icon={<i className="fab fa-dev experience-icon"></i>}
                                key={i}
                            >
                                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                                    {mainTech}
                                </div>
                                <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
                                    {work.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
                                    {work.company}
                                </h4>
                                <div style={{ textAlign: "left", marginTop: "15px" }}>
                                    {tech}
                                </div>
                            </VerticalTimelineElement>
                        );
                    })}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#A9A7A7",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={
                            <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                        }
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;