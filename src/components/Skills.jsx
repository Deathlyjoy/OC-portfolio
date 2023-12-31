import React from "react";

//---------- CSS ----------
import "../scss/skills.scss";

const Skills = ({ sharedSkills, resumeBasicInfo }) => {
    const sectionName = resumeBasicInfo.section_name.skills;
    const skills = sharedSkills.icons.map((skills, i) => (
        <li className="list-inline-item mx-3" key={i}>
            <span>
                <div className="text-center skills-tile">
                    <i className={skills.class} style={{ fontSize: "220%" }}></i>
                    <p className="text-center" style={{ fontSize: "70%", marginTop: "4px" }}>{skills.name}</p>
                </div>
            </span>
        </li>
    ));

    return (
        <section id="skills">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h2 className="section-title">
                        <span className="text-white">{sectionName}</span>
                    </h2>
                </div>
                <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto skill-icon">{skills}</ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
